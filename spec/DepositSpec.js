describe("Deposit", function() {
  beforeEach(function() {
    deposit = new Deposit();
  });

  describe("#amount", function() {
    it("pushes amount and date as object to an array", function() {
      deposit.amount("14/01/2012", 1);
      expect(deposit.deposits).toEqual([
        { date: "14/01/2012", debit: 1, credit: 0 }
      ]);
    });
  });
});
