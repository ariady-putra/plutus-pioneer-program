{-# LANGUAGE DataKinds             #-}
{-# LANGUAGE MultiParamTypeClasses #-}
{-# LANGUAGE NoImplicitPrelude     #-}
{-# LANGUAGE OverloadedStrings     #-}
{-# LANGUAGE ScopedTypeVariables   #-}
{-# LANGUAGE TemplateHaskell       #-}

module Homework2 where

import Plutus.V1.Ledger.Interval
import Plutus.V2.Ledger.Api -- (BuiltinData, POSIXTime, PubKeyHash,
                                       -- ScriptContext, Validator,
                                       -- mkValidatorScript)
import PlutusTx             -- (applyCode, compile, liftCode)
import PlutusTx.Prelude     -- (Bool (False), (.))

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
