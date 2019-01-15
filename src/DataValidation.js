function DataValidation() {
}

DataValidation.prototype.validate = function (date, value) {
  this.checkDate(date);
  this.checkValue(value);
};

DataValidation.prototype.checkDate = function (date) {
  if (typeof date !== 'string' || date.length !== 10) {
    throw new Error('Date is not in a valid format');
  }
};

DataValidation.prototype.checkValue = function (value) {
  if (typeof value !== 'number') {
    throw new Error('Value is not in a valid format');
  }
};
