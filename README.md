# Israeli Bank Validation
A Javascript library to validate Israeli bank accounts
## Installation
```
npm i israeli-bank-validation
```
## importing
```javascript
const { validateBankAccount, RESULT } = require("israeli-bank-validation");
```
## Validate Bank Account Details
To validate bank account details use the following function
```javascript
console.log(validateBankAccount("12", "571", "041116") === RESULT.VALID);
```
The function takes the following parameters:
| Parameter  | Description |Type|
| ------------- | ------------- | ------------- |
| bankId  | The bank id|String| 
| branch  | The branch id|String| 
| account  | The account number |String| 

There the function can return one of the following results:
| Result  | Description |
| ------------- | ------------- |
| VALID  | A valid bank account | 
| NOT_VALID  | Not valid bank account |
|UNKNOWN|The function was not able to validate the account|
