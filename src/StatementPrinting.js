function PrintStatement() {
  this.combined = [];
  this.combinedReversed = [];
  this.print = "date || credit || debit || balance\n";
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

PrintStatement.prototype.statement = function() {
  for (i = 0; i < this.combined.length; i++) {
    this.print += `${this.combined[i]["date"]}` + " || ";
    if (this.combined[i]["credit"] == 0) {
      this.print +=
        " || " +
        `${this.combined[i]["debit"].toFixed(2)}` +
        " || " +
        `${this.combined[i]["balance"].toFixed(2)}` +
        "\n";
    } else {
      this.print +=
        `${this.combined[i]["credit"].toFixed(2)}` +
        " ||  || " +
        `${this.combined[i]["balance"].toFixed(2)}` +
        "\n";
    }
  }
};

PrintStatement.prototype.reverseCombined = function(value) {
  this.combinedReversed = this.combined.reverse();
};

PrintStatement.prototype._combineLoop = function(value) {
  for (i = 0; i < value.length; i++) {
    this.combined.push(value[i]);
  }
};
