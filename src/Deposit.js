function Deposit() {
  this.deposits = [];
}

Deposit.prototype.amount = function(value) {
  this.deposits.push({ debit: value });
  return value;
};
