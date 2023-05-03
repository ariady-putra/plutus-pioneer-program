{-# LANGUAGE DataKinds           #-}
{-# LANGUAGE ImportQualifiedPost #-}
{-# LANGUAGE NoImplicitPrelude   #-}
{-# LANGUAGE OverloadedStrings   #-}
{-# LANGUAGE TemplateHaskell     #-}

module Homework1 where

import Plutus.V1.Ledger.Interval
import Plutus.V2.Ledger.Api -- (BuiltinData, MintingPolicy, POSIXTime,
                                -- PubKeyHash, ScriptContext,
                                -- mkMintingPolicyScript)
import PlutusTx qualified
import PlutusTx.Prelude -- (Bool (False), ($))

import Utilities -- (wrapPolicy)

{-# INLINABLE mkDeadlinePolicy #-}
-- This policy should only allow minting (or burning) of tokens if the owner of the specified PubKeyHash
-- has signed the transaction and if the specified deadline has not passed.
mkDeadlinePolicy :: PubKeyHash -> POSIXTime -> () -> ScriptContext -> Bool
mkDeadlinePolicy _pkh _deadline () _ctx =
    let signedBy       = (`elem` signatories)
        beforeDeadline = _deadline `after` validRange
    in  traceIfFalse "Deadline has passed" beforeDeadline &&
        traceIfFalse "Invalid signer" (signedBy _pkh)
    where
        info        = scriptContextTxInfo _ctx
        signatories = txInfoSignatories info
        validRange  = txInfoValidRange info

{-# INLINABLE mkWrappedDeadlinePolicy #-}
mkWrappedDeadlinePolicy :: PubKeyHash -> POSIXTime -> BuiltinData -> BuiltinData -> ()
mkWrappedDeadlinePolicy pkh deadline = wrapPolicy $ mkDeadlinePolicy pkh deadline

deadlinePolicy :: PubKeyHash -> POSIXTime -> MintingPolicy
deadlinePolicy pkh deadline = mkMintingPolicyScript $
    $$(PlutusTx.compile [|| mkWrappedDeadlinePolicy ||])
        `PlutusTx.applyCode` PlutusTx.liftCode pkh
        `PlutusTx.applyCode` PlutusTx.liftCode deadline
