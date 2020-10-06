import { RESULT, validateBankAccount } from "..";

//1.1
test("test 1.1 10 VALID", () => {
  expect(validateBankAccount("10", "607", "11710022")).toBe(RESULT.VALID);
});
test("test 1.1 13 VALID", () => {
  expect(validateBankAccount("13", "607", "11710022")).toBe(RESULT.VALID);
});
test("test 1.1 34 VALID", () => {
  expect(validateBankAccount("34", "607", "11710022")).toBe(RESULT.VALID);
});
test("test 1.1 10 NOT_VALID", () => {
  expect(validateBankAccount("10", "607", "11720022")).toBe(RESULT.NOT_VALID);
});
test("test 1.1 13 NOT_VALID", () => {
  expect(validateBankAccount("13", "607", "11711022")).toBe(RESULT.NOT_VALID);
});
test("test 1.1 34 NOT_VALID", () => {
  expect(validateBankAccount("34", "607", "11710522")).toBe(RESULT.NOT_VALID);
});

//1.2
test("test 1.2 12 VALID", () => {
  expect(validateBankAccount("12", "571", "041116")).toBe(RESULT.VALID);
});
test("test 1.2 12 NOT_VALID", () => {
  expect(validateBankAccount("12", "571", "11720022")).toBe(RESULT.NOT_VALID);
});

//1.2.1
test("test 1.2.1 04 VALID", () => {
  expect(validateBankAccount("04", "571", "041116")).toBe(RESULT.VALID);
});
test("test 1.2.1 04 NOT_VALID", () => {
  expect(validateBankAccount("04", "571", "11720022")).toBe(RESULT.NOT_VALID);
});

//1.3
test("test 1.3 11 VALID", () => {
  expect(validateBankAccount("11", "211", "000032018")).toBe(RESULT.VALID);
});
test("test 1.3 17 VALID", () => {
  expect(validateBankAccount("17", "876", "000032018")).toBe(RESULT.VALID);
});
test("test 1.3 11 NOT_VALID", () => {
  expect(validateBankAccount("11", "211", "000032017")).toBe(RESULT.NOT_VALID);
});
test("test 1.3 17 NOT_VALID", () => {
  expect(validateBankAccount("17", "876", "000032017")).toBe(RESULT.NOT_VALID);
});

//1.4
test("test 1.4 20 VALID", () => {
  expect(validateBankAccount("20", "006", "160778")).toBe(RESULT.VALID);
});
test("test 1.4 20 NOT_VALID", () => {
  expect(validateBankAccount("20", "006", "11720022")).toBe(RESULT.NOT_VALID);
});

//1.5
test("test 1.5 31 VALID", () => {
  expect(validateBankAccount("31", "288", "000032018")).toBe(RESULT.VALID);
});
test("test 1.5 52 VALID", () => {
  expect(validateBankAccount("52", "986", "000032018")).toBe(RESULT.VALID);
});
test("test 1.5 31 NOT_VALID", () => {
  expect(validateBankAccount("31", "288", "000032017")).toBe(RESULT.NOT_VALID);
});
test("test 1.5 52 NOT_VALID", () => {
  expect(validateBankAccount("52", "986", "000032017")).toBe(RESULT.NOT_VALID);
});

//1.6
test("test 1.6 09 VALID", () => {
  expect(validateBankAccount("09", "001", "059121900")).toBe(RESULT.VALID);
});
test("test 1.6 09 NOT_VALID", () => {
  expect(validateBankAccount("09", "001", "059121901")).toBe(RESULT.NOT_VALID);
});

//1.7
test("test 1.7 22 VALID", () => {
  expect(validateBankAccount("22", "002", "700241017")).toBe(RESULT.VALID);
});
test("test 1.7 22 NOT_VALID", () => {
  expect(validateBankAccount("22", "002", "700241016")).toBe(RESULT.NOT_VALID);
});

//1.8
test("test 1.8 46 VALID", () => {
  expect(validateBankAccount("46", "692", "621697")).toBe(RESULT.VALID);
});
test("test 1.8 46 VALID", () => {
  expect(validateBankAccount("46", "692", "000032018")).toBe(RESULT.VALID);
});
test("test 1.8 46 NOT_VALID", () => {
  expect(validateBankAccount("46", "002", "700241016")).toBe(RESULT.NOT_VALID);
});

//1.9
test("test 1.9 14 VALID", () => {
  expect(validateBankAccount("14", "571", "041116")).toBe(RESULT.VALID);
});
test("test 1.9 14 VALID", () => {
  expect(validateBankAccount("14", "692", "000032018")).toBe(RESULT.VALID);
});
test("test 1.9 14 NOT_VALID", () => {
  expect(validateBankAccount("14", "002", "700241016")).toBe(RESULT.NOT_VALID);
});

test("test 2.0 99 UNKNOWN", () => {
  expect(validateBankAccount("99", "002", "700241016")).toBe(RESULT.UNKNOWN);
});
