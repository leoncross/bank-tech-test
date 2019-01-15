describe("Transaction", function() {
  beforeEach(function() {
    balance = new Balance();
    transaction = new Transaction(balance);
  });

  describe("#deposit", function() {
    it("pushes amount and date as object to an array", function() {
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
      expect(function() {
        transaction.checkDate("invaliddate", 5);
      }).toThrowError("Date is not in a valid format");
    });
    it("doesnt validate an incorrect value", function() {
      expect(function() {
        transaction.checkValue("14/01/2012", "5");
      }).toThrowError("Value is not in a valid format");
    });
  });
});
