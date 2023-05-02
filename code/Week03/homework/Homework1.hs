{-# LANGUAGE DataKinds           #-}
{-# LANGUAGE ImportQualifiedPost #-}
{-# LANGUAGE NoImplicitPrelude   #-}
{-# LANGUAGE OverloadedStrings   #-}
{-# LANGUAGE TemplateHaskell     #-}
{-# LANGUAGE TypeApplications    #-}
{-# LANGUAGE TypeFamilies        #-}

module Homework1 where

import Plutus.V1.Ledger.Interval
import Plutus.V2.Ledger.Api -- (BuiltinData, POSIXTime, PubKeyHash,
                                    --    ScriptContext, Validator,
                                    --    mkValidatorScript)
import PlutusTx             -- (compile, unstableMakeIsData)
import PlutusTx.Prelude     -- (Bool (..))
import Prelude qualified

import Utilities -- (wrapValidator)

---------------------------------------------------------------------------------------------------
----------------------------------- ON-CHAIN / VALIDATOR ------------------------------------------

data VestingDatum = VestingDatum
    { beneficiary1 :: PubKeyHash
    , beneficiary2 :: PubKeyHash
    , deadline     :: POSIXTime
    }
unstableMakeIsData ''VestingDatum

{-# INLINABLE mkVestingValidator #-}
-- This should validate if either beneficiary1 has signed the transaction and the current slot is before or at the deadline
-- or if beneficiary2 has signed the transaction and the deadline has passed.
mkVestingValidator :: VestingDatum -> () -> ScriptContext -> Bool
mkVestingValidator _dat () _ctx =
    let signedBy       = (`elem` signatories)
        beforeDeadline = deadline _dat `after` validRange
        afterDeadline  = deadline _dat `before` validRange
    in (beforeDeadline && traceIfFalse "Before deadline but not signed by B1" (signedBy $ beneficiary1 _dat)) ||
       (afterDeadline && traceIfFalse "After deadline but not signed by B2" (signedBy $ beneficiary2 _dat))
    where
        info        = scriptContextTxInfo _ctx
        signatories = txInfoSignatories info
        validRange  = txInfoValidRange info

{-# INLINABLE  mkWrappedVestingValidator #-}
mkWrappedVestingValidator :: BuiltinData -> BuiltinData -> BuiltinData -> ()
mkWrappedVestingValidator = wrapValidator mkVestingValidator

validator :: Validator
validator = mkValidatorScript $$(compile [|| mkWrappedVestingValidator ||])

---------------------------------------------------------------------------------------------------
------------------------------------- HELPER FUNCTIONS --------------------------------------------

saveVal :: Prelude.IO ()
saveVal = writeValidatorToFile "./homework/assets/Homework1.plutus" validator
