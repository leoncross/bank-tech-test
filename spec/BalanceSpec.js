describe("Balance", function() {
  var balance;

  beforeEach(function() {
    balance = new Balance();
  });

  describe("#calculate", function() {
    it("calculates the new balance", function() {
      expect(balance.calculate(10, 5)).toEqual(15);
    });
  });
});
