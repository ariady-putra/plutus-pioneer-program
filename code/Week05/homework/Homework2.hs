{-# LANGUAGE DataKinds           #-}
{-# LANGUAGE ImportQualifiedPost #-}
{-# LANGUAGE NoImplicitPrelude   #-}
{-# LANGUAGE OverloadedStrings   #-}
{-# LANGUAGE TemplateHaskell     #-}

module Homework2 where

import Plutus.V1.Ledger.Value
import Plutus.V2.Ledger.Api -- (BuiltinData, MintingPolicy,
                                -- ScriptContext, TokenName, TxOutRef,
                                -- mkMintingPolicyScript)
import PlutusTx qualified
import PlutusTx.Prelude -- (any, traceIfFalse, Bool (True, False), ($), (.), (&&), (==))

import Utilities -- (wrapPolicy)

{-# INLINABLE mkEmptyNFTPolicy #-}
-- Minting policy for an NFT, where the minting transaction must consume the given UTxO as input
-- and where the TokenName will be the empty ByteString.
mkEmptyNFTPolicy :: TxOutRef -> () -> ScriptContext -> Bool
mkEmptyNFTPolicy _oref () _ctx =
    let consumeORef    = any ((_oref==) . txInInfoOutRef) inputs
        emptyTokenName = case flattenValue mint of
                            [(_, tn, ta)] -> {- can't pattern match due to Exception:
                                                Error: Unsupported feature:
                                                Use of == from the Haskell Eq typeclass
                                             -}
                                "" == unTokenName tn && -- is empty ByteString TokenName?
                                ta == 1 -- validate TokenAmount to pass `cabal test`
                            _default -> False
    in  traceIfFalse "UTxO not consumed" consumeORef &&
        traceIfFalse "Invalid TokenName" emptyTokenName
    where
        info   = scriptContextTxInfo _ctx
        inputs = txInfoInputs info
        mint   = txInfoMint info

{-# INLINABLE mkWrappedEmptyNFTPolicy #-}
mkWrappedEmptyNFTPolicy :: TxOutRef -> BuiltinData -> BuiltinData -> ()
mkWrappedEmptyNFTPolicy = wrapPolicy . mkEmptyNFTPolicy

nftPolicy :: TxOutRef -> TokenName -> MintingPolicy
nftPolicy oref tn = mkMintingPolicyScript $ $$(PlutusTx.compile [|| mkWrappedEmptyNFTPolicy ||]) `PlutusTx.applyCode` PlutusTx.liftCode oref
