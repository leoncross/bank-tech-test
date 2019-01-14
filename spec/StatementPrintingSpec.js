describe("PrintStatement", function() {
  var printStatement;

  beforeEach(function() {
    printStatement = new PrintStatement();
  });

  describe("#combine", function() {
    it("combines deposits and withdraws to one array", function() {
      deposits = [
        { date: "01/01/2012", debit: 1 },
        { date: "05/01/2012", debit: 2 }
      ];
      withdraws = [
        { date: "02/01/2012", credit: 5 },
        { date: "03/01/2012", credit: 6 }
      ];
      printStatement.combineDepositWithdraw(deposits, withdraws);
      expect(printStatement.combined.length).toEqual(4);
    });
  });
});
