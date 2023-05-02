{-# LANGUAGE DataKinds             #-}
{-# LANGUAGE ImportQualifiedPost   #-}
{-# LANGUAGE MultiParamTypeClasses #-}
{-# LANGUAGE NoImplicitPrelude     #-}
{-# LANGUAGE OverloadedStrings     #-}
{-# LANGUAGE ScopedTypeVariables   #-}
{-# LANGUAGE TemplateHaskell       #-}
{-# LANGUAGE TypeApplications      #-}

module Homework2 where

import Control.Monad

import PlutusTx.Builtins.Class
import Plutus.V1.Ledger.Interval
import Plutus.V2.Ledger.Api -- (BuiltinData, POSIXTime, PubKeyHash,
                                       -- ScriptContext, Validator,
                                       -- mkValidatorScript)
import PlutusTx             -- (applyCode, compile, liftCode)
import PlutusTx.Prelude     -- (Bool (False), (.))
import Prelude qualified

import Utilities -- (wrapValidator)

---------------------------------------------------------------------------------------------------
----------------------------------- ON-CHAIN / VALIDATOR ------------------------------------------

{-# INLINABLE mkParameterizedVestingValidator #-}
-- This should validate if the transaction has a signature from the parameterized beneficiary and the deadline has passed.
mkParameterizedVestingValidator :: PubKeyHash -> POSIXTime -> () -> ScriptContext -> Bool
mkParameterizedVestingValidator _beneficiary _deadline () _ctx =
    let signedBy      = (`elem` signatories)
        afterDeadline = from _deadline `contains` validRange
    in  traceIfFalse "Deadline has NOT passed" afterDeadline &&
        traceIfFalse "Invalid beneficiary" (signedBy _beneficiary)
    where
        info        = scriptContextTxInfo _ctx
        signatories = txInfoSignatories info
        validRange  = txInfoValidRange info

{-# INLINABLE  mkWrappedParameterizedVestingValidator #-}
mkWrappedParameterizedVestingValidator :: PubKeyHash -> BuiltinData -> BuiltinData -> BuiltinData -> ()
mkWrappedParameterizedVestingValidator = wrapValidator . mkParameterizedVestingValidator

validator :: PubKeyHash -> Validator
validator beneficiary = mkValidatorScript ($$(compile [|| mkWrappedParameterizedVestingValidator ||]) `applyCode` liftCode beneficiary)

---------------------------------------------------------------------------------------------------
------------------------------------- HELPER FUNCTIONS --------------------------------------------

saveVal :: Prelude.IO ()
saveVal = forM_ ["nami", "eternl"] (\ wallet ->
    do
        let pkhFile    = "./homework/assets/pkh_" ++ wallet ++ ".txt"
            plutusFile = "./homework/assets/Homework2" ++ wallet ++ ".plutus"
        
        strPKH <- Prelude.readFile pkhFile
        
        let bbsPKH = stringToBuiltinByteString strPKH
            bnfPKH = PubKeyHash bbsPKH
        
        writeValidatorToFile plutusFile $ validator bnfPKH
    )
