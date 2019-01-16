/* eslint-disable */

describe('Feature', function() {
  beforeEach(() => {
    transaction = new Transaction();
    print = new PrintStatement();
  });
  describe("#Full feature", function() {
    it("completes the acceptance criteria", function() {
      transaction.deposit("10/01/2012", 1000);
      transaction.deposit("13/01/2012", 2000);
      transaction.withdraw("13/01/2012", 500);
      print.printProcess(transaction.transactions);
      expect(print.print).toEqual(
        "date || credit || debit || balance\n13/01/2012 ||  || 500.00 || 2500.00\n13/01/2012 || 2000.00 ||  || 3000.00\n10/01/2012 || 1000.00 ||  || 1000.00\n"
      );
    });
  });
});
