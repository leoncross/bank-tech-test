describe("Withdraw", function() {
  var withdraw;

  beforeEach(function() {
    withdraw = new Withdraw();
  });

  describe("#amount", function() {
    it("pushes amount and date as object to an array", function() {
      withdraw.amount("14/01/2012", 1);
      expect(withdraw.withdrawals).toEqual([{ date: "14/01/2012", credit: 1 }]);
    });
  });
});
