import Vector from "./vector";

export const RESULT = {
  VALID: "VALID",
  NOT_VALID: "NOT_VALID",
  UNKNOWN: "UNKNOWN",
};

export function validateBankAccount(
  bankId: string,
  branch: string,
  account: string
) {
  let accountVec: Vector;
  let validateAccount: Vector;
  let branchVec = new Vector(branch, 3);
  let validateBranch: Vector;
  let sum = 0;

  switch (parseInt(bankId, 10)) {
    case 10:
    case 13:
    case 34:
      validateBranch = new Vector(["10", "9", "8"]);
      validateAccount = new Vector(["7", "6", "5", "4", "3", "2", "0", "0"]);
      accountVec = new Vector(account, 8);
      sum =
        (validateBranch.mult(branchVec) +
          validateAccount.mult(accountVec) +
          accountVec.get(6) +
          accountVec.get(7)) %
        100;
      return [20, 60, 70, 72, 90].includes(sum)
        ? RESULT.VALID
        : RESULT.NOT_VALID;

    case 12:
      validateBranch = new Vector(["9", "8", "7"]);
      validateAccount = new Vector(["6", "5", "4", "3", "2", "1"]);
      accountVec = new Vector(account, 6);
      sum =
        (validateBranch.mult(branchVec) + validateAccount.mult(accountVec)) %
        11;
      return [0, 2, 4, 6].includes(sum) ? RESULT.VALID : RESULT.NOT_VALID;

    case 4:
      validateBranch = new Vector(["9", "8", "7"]);
      validateAccount = new Vector(["6", "5", "4", "3", "2", "1"]);
      accountVec = new Vector(account, 6);
      sum =
        (validateBranch.mult(branchVec) + validateAccount.mult(accountVec)) %
        11;
      return [0, 2].includes(sum) ? RESULT.VALID : RESULT.NOT_VALID;

    case 11:
    case 17:
      validateAccount = new Vector([
        "9",
        "8",
        "7",
        "6",
        "5",
        "4",
        "3",
        "2",
        "1",
      ]);
      accountVec = new Vector(account, 9);
      sum = validateAccount.mult(accountVec) % 11;
      return [0, 2, 4].includes(sum) ? RESULT.VALID : RESULT.NOT_VALID;

    case 20:
      if (parseInt(branch, 10) > 400) {
        branch = String(parseInt(branch, 10) - 400);
      }
      branchVec = new Vector(branch, 3);
      validateBranch = new Vector(["9", "8", "7"]);
      validateAccount = new Vector(["6", "5", "4", "3", "2", "1"]);
      accountVec = new Vector(account, 6);
      sum =
        (validateBranch.mult(branchVec) + validateAccount.mult(accountVec)) %
        11;
      return [0, 2, 4].includes(sum) ? RESULT.VALID : RESULT.NOT_VALID;

    case 31:
    case 52:
      validateAccount = new Vector([
        "9",
        "8",
        "7",
        "6",
        "5",
        "4",
        "3",
        "2",
        "1",
      ]);
      accountVec = new Vector(account, 9);
      sum = validateAccount.mult(accountVec) % 11;
      if ([0, 6].includes(sum)) {
        return RESULT.VALID;
      }
      validateAccount = new Vector(["6", "5", "4", "3", "2", "1"]);
      accountVec = new Vector(account, 6);
      return [0, 6].indexOf(validateAccount.mult(accountVec)) !== -1
        ? RESULT.VALID
        : RESULT.NOT_VALID;

    case 9:
      validateAccount = new Vector([
        "9",
        "8",
        "7",
        "6",
        "5",
        "4",
        "3",
        "2",
        "1",
      ]);
      accountVec = new Vector(account, 9);
      return [0].indexOf(validateAccount.mult(accountVec)) !== -1
        ? RESULT.VALID
        : RESULT.NOT_VALID;

    case 22:
      validateAccount = new Vector([
        "3",
        "2",
        "7",
        "6",
        "5",
        "4",
        "3",
        "2",
        "0",
      ]);
      accountVec = new Vector(account, 9);
      return 11 - (accountVec.mult(validateAccount) % 11) === accountVec.get(9)
        ? RESULT.VALID
        : RESULT.NOT_VALID;
    case 46:
      accountVec = new Vector(account, 6);
      validateAccount = new Vector(["6", "5", "4", "3", "2", "1"]);
      validateBranch = new Vector(["9", "8", "7"]);
      sum = validateBranch.mult(branchVec) + validateAccount.mult(accountVec);
      if (sum % 11 === 0) {
        return RESULT.VALID;
      }
      if (
        [
          "154",
          "166",
          "178",
          "181",
          "183",
          "191",
          "192",
          "503",
          "505",
          "507",
          "515",
          "516",
          "527",
          "539",
        ].indexOf(branch) !== 1 &&
        sum % 11 === 2
      ) {
        return RESULT.VALID;
      }
      accountVec = new Vector(account, 9);
      validateAccount = new Vector([
        "9",
        "8",
        "7",
        "6",
        "5",
        "4",
        "3",
        "2",
        "1",
      ]);
      if (validateAccount.mult(accountVec) === 0) {
        return RESULT.VALID;
      }
      accountVec = new Vector(account, 6);
      validateAccount = new Vector(["6", "5", "4", "3", "2", "1"]);
      return validateAccount.mult(accountVec) === 0
        ? RESULT.VALID
        : RESULT.NOT_VALID;
    case 14:
      accountVec = new Vector(account, 6);
      validateAccount = new Vector(["6", "5", "4", "3", "2", "1"]);
      validateBranch = new Vector(["9", "8", "7"]);
      sum = validateBranch.mult(branchVec) + validateAccount.mult(accountVec);
      if (sum % 11 === 0) {
        return RESULT.VALID;
      }
      if (
        ["385", "384", "365", "347", "363", "362", "361"].includes(branch) &&
        sum % 11 === 2
      ) {
        return RESULT.VALID;
      }
      if (["363", "362", "361"].includes(branch) && sum % 11 === 4) {
        return RESULT.VALID;
      }
      accountVec = new Vector(account, 9);
      validateAccount = new Vector([
        "9",
        "8",
        "7",
        "6",
        "5",
        "4",
        "3",
        "2",
        "1",
      ]);
      if (validateAccount.mult(accountVec)) {
        return RESULT.VALID;
      }
      validateAccount = new Vector(["6", "5", "4", "3", "2", "1"]);
      return validateAccount.mult(accountVec) % 11 === 0
        ? RESULT.VALID
        : RESULT.NOT_VALID;

    default:
      return RESULT.UNKNOWN;
  }
}
