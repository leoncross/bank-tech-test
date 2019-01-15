/* eslint-disable */

describe("Balance", function() {
  beforeEach(function() {
    balance = new Balance();

    allTransactions = [
      { date: "03/01/2012", debit: 3, credit: 0, balance: -3 },
      { date: "05/01/2012", debit: 0, credit: 10, balance: 7 }
    ];
    creditTransaction = { date: "14/01/2012", debit: 0, credit: 1, balance: 0 };
    debitTransaction = { date: "14/01/2012", debit: 1, credit: 0, balance: 0 };
  });

  describe("#calculate", function() {
    it("calculates balances with credit", function() {
      expect(balance.calculate(allTransactions, creditTransaction)).toEqual({
        date: "14/01/2012",
        debit: 0,
        credit: 1,
        balance: 8
      });
    });
    it("calculates balances with debit", function() {
      expect(balance.calculate(allTransactions, debitTransaction)).toEqual({
        date: "14/01/2012",
        debit: 1,
        credit: 0,
        balance: 6
      });
    });
  });
  describe("#setStartingBalance", function() {
    it("manages starting balance with credit", function() {
      expect(balance._setStartingBalance(creditTransaction)).toEqual({
        date: "14/01/2012",
        debit: 0,
        credit: 1,
        balance: 1
      });
    });
    it("manages starting balance with debit", function() {
      expect(balance._setStartingBalance(debitTransaction)).toEqual({
        date: "14/01/2012",
        debit: 1,
        credit: 0,
        balance: -1
      });
    });
  });
});
