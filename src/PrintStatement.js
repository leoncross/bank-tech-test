function PrintStatement() {
  this.transactions = [];
  this.print = "date || credit || debit || balance\n";
}

PrintStatement.prototype.printProcess = function(transactions) {
  this.order(transactions);
  this.formatStatement();
  return this.print;
};

PrintStatement.prototype.order = function(transactions) {
  this.transactions = transactions;
  this.transactions.sort(function(a, b) {
    var dateA = new Date(a.date),
      dateB = new Date(b.date);
    return dateA - dateB;
  });
  this.transactions = this.transactions.reverse();
};

PrintStatement.prototype.formatStatement = function() {
  for (i = 0; i < this.transactions.length; i++) {
    this.print += `${this.transactions[i]["date"]}` + " || ";
    if (this.transactions[i]["credit"] == 0) {
      this.print +=
        " || " + `${this.transactions[i]["debit"].toFixed(2)}` + " || ";
    } else {
      this.print += `${this.transactions[i]["credit"].toFixed(2)}` + " ||  || ";
    }
    this.print += `${this.transactions[i]["balance"].toFixed(2)}` + "\n";
  }
};
