function Transaction() {
  this.transactions = [];
}

Transaction.prototype.withdraw = function(date, value) {
  this.checkDate(date);
  this.checkValue(value);
  this.transactions.push({ date: date, debit: value, credit: 0 });
};

Transaction.prototype.deposit = function(date, value) {
  this.checkDate(date);
  this.checkValue(value);
  this.transactions.push({ date: date, debit: 0, credit: value });
};

Transaction.prototype.checkDate = function(date) {
  if (typeof date === "string" && date.length === 10) {
  } else {
    throw new Error("Date is not in a valid format");
  }
};

Transaction.prototype.checkValue = function(value) {
  if (typeof value === "number") {
  } else {
    throw new Error("Value is not in a valid format");
  }
};
