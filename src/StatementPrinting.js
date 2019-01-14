function PrintStatement() {
  this.combined = [];
}

PrintStatement.prototype.combineDepositWithdraw = function(deposit, withdraw) {
  this._combineLoop(deposit);
  this._combineLoop(withdraw);
};

PrintStatement.prototype._combineLoop = function(value) {
  for (i = 0; i < value.length; i++) {
    this.combined.push(value[i]);
  }
};
