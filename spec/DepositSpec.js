describe("Deposit", function() {
  var deposit;

  beforeEach(function() {
    deposit = new Deposit();
  });

  describe("#amount", function() {
    it("returns value given", function() {
      expect(deposit.amount(1)).toBe(1);
    });
  });
});
