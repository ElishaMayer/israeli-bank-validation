export const BANKS = [
  { bankCode: 10, validation: validate1_1 },
  { bankCode: 12, validation: validate1_2 },
  { bankCode: 20, validation: validate1_4 },
  { bankCode: 11, validation: validate1_3 },
  { bankCode: 17, validation: validate1_3 },
  { bankCode: 31, validation: validate1_5 },
  { bankCode: 46, validation: validate1_8 },
  { bankCode: 14, validation: validate1_9 },
  { bankCode: 52, validation: validate1_5 },
  { bankCode: 13, validation: validate1_1 },
  { bankCode: 4, validation: validate1_2_1 },
  { bankCode: 9, validation: validate1_6 },
  { bankCode: 22, validation: validate1_7 },
  { bankCode: 34, validation: validate1_1 },
];

function vectorMult(vec1, vec2) {
  let res = 0;
  let length = Math.min(vec1.length, vec2.length);
  for (let index = 0; index < length; index++) {
    res = res + parseInt(vec1[index], 10) * parseInt(vec2[index], 10);
  }
  return res;
}

function getArray(str, length) {
  let arr = Array.from((str || "").replace(/\D+/g, ""));
  let missing = length - arr.length;
  if (missing > 0) {
    for (let index = 0; index < missing; index++) {
      arr.unshift("0");
    }
  } else {
    for (let index = 0; index < Math.abs(missing); index++) {
      arr.shift();
    }
  }
  return arr;
}

function validate1_1(exempt, account) {
  let accountArr = getArray(account, 8);
  let sum =
    vectorMult(getArray(exempt, 3), ["10", "9", "8"]) +
    vectorMult(accountArr, ["7", "6", "5", "4", "3", "2", "0", "0"]) +
    parseInt(accountArr[6] + accountArr[7], 10);
  return [20, 60, 70, 72, 90].indexOf(sum % 100) !== -1;
}

function validate1_2(exempt, account) {
  let sum =
    vectorMult(getArray(exempt, 3), ["9", "8", "7"]) +
    vectorMult(getArray(account, 6), ["6", "5", "4", "3", "2", "1"]);
  return [0, 2, 4, 6].indexOf(sum % 11) !== -1;
}

function validate1_2_1(exempt, account) {
  let sum =
    vectorMult(getArray(exempt, 3), ["9", "8", "7"]) +
    vectorMult(getArray(account, 6), ["6", "5", "4", "3", "2", "1"]);
  return [0, 2].indexOf(sum % 11) !== -1;
}

function validate1_3(exempt, account) {
  let sum = vectorMult(getArray(account, 9), [
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
  return [0, 2, 4].indexOf(sum % 11) !== -1;
}

function validate1_4(exempt, account) {
  if (parseInt(exempt, 10) > 400) {
    exempt = String(parseInt(exempt, 10) - 400);
  }
  let sum =
    vectorMult(getArray(exempt, 3), ["9", "8", "7"]) +
    vectorMult(getArray(account, 6), ["6", "5", "4", "3", "2", "1"]);
  return [0, 2, 4].indexOf(sum % 11) !== -1;
}

function validate1_5(exempt, account) {
  let sum = vectorMult(getArray(account, 9), [
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
  let res = [0, 6].indexOf(sum % 11) !== -1;
  if (res) {
    return true;
  }
  sum = vectorMult(getArray(account, 6), ["6", "5", "4", "3", "2", "1"]);
  return [0, 6].indexOf(sum % 11) !== -1;
}

function validate1_6(exempt, account) {
  let sum = vectorMult(getArray(account, 9), [
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
  return [0].indexOf(sum % 10) !== -1;
}

function validate1_7(exempt, account) {
  let sum = vectorMult(getArray(account, 9), [
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
  return 11 - (sum % 11) === parseInt(getArray(account, 9).pop(), 10);
}

function validate1_8_1(exempt, account) {
  let sum =
    vectorMult(getArray(exempt, 3), ["9", "8", "7"]) +
    vectorMult(getArray(account, 6), ["6", "5", "4", "3", "2", "1"]);
  if (sum % 11 === 0) {
    return true;
  }
  return (
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
    ].indexOf(getArray(exempt, 3).join("")) !== 1 && sum % 11 === 2
  );
}

function validate1_8_2(exempt, account) {
  let sum = vectorMult(getArray(account, 9), [
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
  let res = [0].indexOf(sum % 11) !== -1;
  if (res) {
    return true;
  }
  sum = vectorMult(getArray(account, 6), ["6", "5", "4", "3", "2", "1"]);
  return [0].indexOf(sum % 11) !== -1;
}

function validate1_8(exempt, account) {
  return validate1_8_1(exempt, account) || validate1_8_2(exempt, account);
}

function validate1_9_1(exempt, account) {
  let sum =
    vectorMult(getArray(exempt, 3), ["9", "8", "7"]) +
    vectorMult(getArray(account, 6), ["6", "5", "4", "3", "2", "1"]);
  if (sum % 11 === 0) {
    return true;
  }
  if (
    ["385", "384", "365", "347", "363", "362", "361"].indexOf(
      getArray(exempt, 3).join("")
    ) !== 1 &&
    sum % 11 === 2
  ) {
    return true;
  }
  return (
    ["363", "362", "361"].indexOf(getArray(exempt, 3).join("")) !== 1 &&
    sum % 11 === 4
  );
}

function validate1_9_2(exempt, account) {
  let sum = vectorMult(getArray(account, 9), [
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
  let res = [0].indexOf(sum % 11) !== -1;
  if (res) {
    return true;
  }
  sum = vectorMult(getArray(account, 6), ["6", "5", "4", "3", "2", "1"]);
  return [0].indexOf(sum % 11) !== -1;
}

function validate1_9(exempt, account) {
  return validate1_9_1(exempt, account) || validate1_9_2(exempt, account);
}

export function validateId(id) {
  let arr1 = getArray(id, 9).map((n) => parseInt(n, 10));
  let arr2 = [1, 2, 1, 2, 1, 2, 1, 2, 1];
  let sum = 0;
  for (let index = 0; index < 9; index++) {
    let mult = arr1[index] * arr2[index];
    if (mult > 9) {
      mult = (mult % 10) + Math.floor(mult / 10);
    }
    sum += mult;
  }
  return sum % 10 === 0;
}
