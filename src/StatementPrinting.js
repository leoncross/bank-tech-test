function PrintStatement() {
  this.combined = [];
}

PrintStatement.prototype.combineDepositWithdraw = function(deposit, withdraw) {
  this._combineLoop(deposit);
  this._combineLoop(withdraw);
};

PrintStatement.prototype.order = function() {
  this.combined.sort(function(a, b) {
    var dateA = new Date(a.date),
      dateB = new Date(b.date);
    return dateA - dateB;
  });
};

PrintStatement.prototype._combineLoop = function(value) {
  for (i = 0; i < value.length; i++) {
    this.combined.push(value[i]);
  }
};
