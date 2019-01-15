/* eslint-disable */

describe("Transaction", function() {
  beforeEach(function() {
    balance = new Balance();
    dataValidation = new DataValidation();
    transaction = new Transaction(balance, dataValidation);
  });

  describe("#deposit", function() {
    it("pushes amount and date as object to an array", function() {
      spyOn(dataValidation, "validate")
      spyOn(balance, "calculate").and.returnValue({
        date: "14/01/2012",
        debit: 0,
        credit: 1,
        balance: 1
      });
      expect(transaction.deposit("14/01/2012", 1)).toEqual({
        date: "14/01/2012",
        debit: 0,
        credit: 1,
        balance: 1
      });
    });
  });

  describe("#withdraw", function() {
    it("pushes amount and date as object to an array", function() {
      spyOn(dataValidation, "validate")
      spyOn(balance, "calculate").and.returnValue({
        date: "14/01/2012",
        debit: 1,
        credit: 0,
        balance: -1
      });
      expect(transaction.withdraw("14/01/2012", 1)).toEqual({
        date: "14/01/2012",
        debit: 1,
        credit: 0,
        balance: -1
      });
    });
  });

  describe("#validations", function() {
    it("doesnt validate an incorrect date", function() {
      spyOn(dataValidation, "validate").and.throwError('Date is not in a valid format')
      expect(function() {
        transaction.deposit("invalid", 1)
      }).toThrowError("Date is not in a valid format");
    });
    it("doesnt validate an incorrect value", function() {
      spyOn(dataValidation, "validate").and.throwError('Value is not in a valid format')
      expect(function() {
        transaction.deposit("14/01/2012", "1")
      }).toThrowError("Value is not in a valid format");
    });
  });
});
