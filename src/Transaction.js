function Transaction(balance) {
  this.transactions = [];
  this.balance = balance;
}

Transaction.prototype.withdraw = function (date, value) {
  this.checkDate(date);
  this.checkValue(value);
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
  this.checkDate(date);
  this.checkValue(value);
  const returnedBalance = this.balance.calculate(this.transactions, {
    date,
    debit: 0,
    credit: value,
    balance: 0,
  });
  this.transactions.push(returnedBalance);
  return this.transactions.slice(-1)[0];
};

Transaction.prototype.checkDate = function (date) {
  if (typeof date !== 'string' || date.length !== 10) {
    throw new Error('Date is not in a valid format');
  }
};

Transaction.prototype.checkValue = function (value) {
  if (typeof value !== 'number') {
    throw new Error('Value is not in a valid format');
  }
};
