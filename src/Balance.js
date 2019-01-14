function Balance() {}

Balance.prototype.calculate = function(oldAmount, changeAmount) {
  return oldAmount + changeAmount;
};
