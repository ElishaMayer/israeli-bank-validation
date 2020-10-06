import { RESULT, validateBankAccount } from "..";

test("test 1.1 VALID", () => {
  expect(validateBankAccount("10", "607", "11710022")).toBe(RESULT.VALID);
});
test("test 1.1 VALID", () => {
  expect(validateBankAccount("13", "607", "11710022")).toBe(RESULT.VALID);
});
test("test 1.1 VALID", () => {
  expect(validateBankAccount("34", "607", "11710022")).toBe(RESULT.VALID);
});
