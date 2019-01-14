function Deposit() {
  this.deposits = [];
}

Deposit.prototype.amount = function(date, value) {
  this.deposits.push({ date: date, debit: value });
  return value;
};
