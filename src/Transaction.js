function Transaction(balance, dataValidation) {
  this.transactions = [];
  this.balance = balance;
  this.dataValidation = dataValidation;
}

Transaction.prototype.withdraw = function (date, value) {
  this.dataValidation.validate(date, value);
  const returnedBalance = this.balance.calculate(this.transactions, {
    date,
    debit: value,
    credit: 0,
    balance: 0,
  });
  this.transactions.push(returnedBalance);
  return this.transactions.slice(-1)[0];
};

Transaction.prototype.deposit = function (date, value) {
  this.dataValidation.validate(date, value);
  const returnedBalance = this.balance.calculate(this.transactions, {
    date,
    debit: 0,
    credit: value,
    balance: 0,
  });
  this.transactions.push(returnedBalance);
  return this.transactions.slice(-1)[0];
};
