function PrintStatement() {
  this.statement = [];
  this.print = 'date || credit || debit || balance\n';
}

PrintStatement.prototype.printProcess = function (transactions) {
  this._order(transactions);
  this._formatStatement();
  return this.print;
};

PrintStatement.prototype._order = function (transactions) {
  transactions.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA - dateB;
  });
  this.statement = transactions.reverse();
};

PrintStatement.prototype._formatStatement = function () {
  for (let index = 0; index < this.statement.length; index++) {
    this.print += `${this.statement[index].date}` + ' || ';
    if (this.statement[index].credit === 0) {
      this.print += ' || ' + `${this.statement[index].debit.toFixed(2)}` + ' || ';
    } else {
      this.print += `${this.statement[index].credit.toFixed(2)}` + ' ||  || ';
    }
    this.print += `${this.statement[index].balance.toFixed(2)}` + '\n';
  }
};
