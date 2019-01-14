function Withdraw() {
  this.withdrawals = [];
}

Withdraw.prototype.amount = function(date, value) {
  this.withdrawals.push({ date: date, debit: value, credit: 0 });
};
