describe("Balance", function() {
  beforeEach(function() {
    balance = new Balance();

    statement = [
      { date: "03/01/2012", debit: 3, credit: 0 },
      { date: "05/01/2012", debit: 0, credit: 10 }
    ];
  });

  describe("#calculate", function() {
    it("calculates balances from past transactions", function() {
      expect(balance.calculate(statement)).toEqual([
        { date: "03/01/2012", debit: 3, credit: 0, balance: -3 },
        { date: "05/01/2012", debit: 0, credit: 10, balance: 7 }
      ]);
    });
  });
  describe("#setStartingBalance", function() {
    it("manages starting balance", function() {
      statement1 = [{ date: "03/01/2012", debit: 3, credit: 0 }];
      expect(balance.setStartingBalance(statement1)).toEqual([
        { date: "03/01/2012", debit: 3, credit: 0, balance: -3 }
      ]);
    });
  });
});
