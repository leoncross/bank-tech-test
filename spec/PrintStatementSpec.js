describe("PrintStatement", function() {
  var deposits = [
    { date: "01/01/2012", debit: 1, credit: 0 },
    { date: "05/01/2012", debit: 4, credit: 0 }
  ];
  var withdraws = [
    { date: "02/01/2012", debit: 0, credit: 2 },
    { date: "03/01/2012", debit: 0, credit: 3 }
  ];
  var depositsBalance = [
    { date: "03/01/2012", debit: 3, credit: 0, balance: -4 },
    { date: "02/01/2012", debit: 2, credit: 0, balance: -1 }
  ];
  var withdrawsBalance = [
    { date: "05/01/2012", debit: 0, credit: 4, balance: 0 },
    { date: "01/01/2012", debit: 0, credit: 1, balance: 1 }
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
      print._order();
      expect(print.combined).toEqual([
        { date: "01/01/2012", debit: 1, credit: 0 },
        { date: "02/01/2012", debit: 0, credit: 2 },
        { date: "03/01/2012", debit: 0, credit: 3 },
        { date: "05/01/2012", debit: 4, credit: 0 }
      ]);
    });
  });
  describe("#reverseCombined", function() {
    it("reverses the array of objects", function() {
      print.combineDepositWithdraw(deposits, withdraws);
      print._order();
      print._reverseCombined();
      expect(print.combined).toEqual([
        { date: "05/01/2012", debit: 4, credit: 0 },
        { date: "03/01/2012", debit: 0, credit: 3 },
        { date: "02/01/2012", debit: 0, credit: 2 },
        { date: "01/01/2012", debit: 1, credit: 0 }
      ]);
    });
  });
  describe("#printProcess", function() {
    it("prints the statement in the required format", function() {
      print.combineDepositWithdraw(depositsBalance, withdrawsBalance);
      print.printProcess();
      expect(print.print).toEqual(
        "date || credit || debit || balance\n05/01/2012 || 4.00 ||  || 0.00\n03/01/2012 ||  || 3.00 || -4.00\n02/01/2012 ||  || 2.00 || -1.00\n01/01/2012 || 1.00 ||  || 1.00\n"
      );
    });
  });
});
