const Parser = require("papaparse");
const nodeFetch = require("node-fetch");
var iso88598 = require("iso-8859-8");
const chardet = require("chardet");
var iconv = require("iconv-lite");

const fs = require("fs");
const DATABASE_URL =
  "https://www.boi.org.il/he/BankingSupervision/BanksAndBranchLocations/Lists/BoiBankBranchesDocs/snifim_he.csv";
nodeFetch(DATABASE_URL)
  .then((res: any) => res.buffer())
  .then((body: any) => {
    let output = iconv.decode(body, "ISO-8859-8");

    let csv = Parser.parse(output);
    let headers = [
      "bankCode",
      "bankName",
      "branchCode",
      "branchName",
      "branchAddress",
      "city",
      "zip",
      "postCode",
      "phone",
      "fax",
      "freePhone",
      "accessForDisabled",
      "type",
      "closedDay",
      "openDate",
      "closingDate",
      "mergeBank",
      "mergeBranch",
      "xCoordinate",
      "yCoordinate",
    ];
    let data = csv.data
      .slice(1)
      .map((row: any) => {
        let obj: any = {};
        row.forEach((element: any, i: number) => {
          obj[headers[i]] = element;
        });
        return obj;
      })
      .filter((branch: any) => branch.bankCode);
    let banks = data
      .reduce((a: any, b: any) => {
        if (a.every((bn: any) => bn.bankCode !== b.bankCode) && b.bankCode) {
          a.push(b);
        }
        return a;
      }, [])
      .map((bank: any) => ({
        bankCode: parseInt(bank.bankCode),
        bankName: bank.bankName,
      }));
    fs.writeFileSync(
      "src/bank-data.json",
      JSON.stringify({ branchs: data, banks }),
      {
        encoding: "utf-8",
      }
    );
  });
