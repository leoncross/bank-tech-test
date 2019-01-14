describe("Deposit", function() {
  var deposit;

  beforeEach(function() {
    deposit = new Deposit();
  });

  describe("#amount", function() {
    it("returns value given", function() {
      expect(deposit.amount(1)).toBe(1);
    });
    it("pushes the amount to deposits", function() {
      deposit.amount(1);
      expect(deposit.deposits).toEqual([{ debit: 1 }]);
    });
  });
});
