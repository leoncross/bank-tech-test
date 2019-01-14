describe("PrintStatement", function() {
  var deposits = [
    { date: "01/01/2012", debit: 1, credit: "" },
    { date: "05/01/2012", debit: 4, credit: "" }
  ];
  var withdraws = [
    { date: "02/01/2012", debit: "", credit: 2 },
    { date: "03/01/2012", debit: "", credit: 3 }
  ];

  beforeEach(function() {
    print = new PrintStatement();
  });

  describe("#combine", function() {
    it("combines deposits and withdraws to one array", function() {
      print.combineDepositWithdraw(deposits, withdraws);
      expect(print.combined.length).toEqual(4);
    });
  });
  describe("#ordered", function() {
    it("orders items in array by date", function() {
      print.combineDepositWithdraw(deposits, withdraws);
      print.order();
      expect(print.combined).toEqual([
        { date: "01/01/2012", debit: 1, credit: "" },
        { date: "02/01/2012", debit: "", credit: 2 },
        { date: "03/01/2012", debit: "", credit: 3 },
        { date: "05/01/2012", debit: 4, credit: "" }
      ]);
    });
  });

  describe("#reverseCombined", function() {
    it("reverses the array of objects", function() {
      print.combineDepositWithdraw(deposits, withdraws);
      print.order();
      print.reverseCombined();
      expect(print.combinedReversed).toEqual([
        { date: "05/01/2012", debit: 4, credit: "" },
        { date: "03/01/2012", debit: "", credit: 3 },
        { date: "02/01/2012", debit: "", credit: 2 },
        { date: "01/01/2012", debit: 1, credit: "" }
      ]);
    });
  });
});
