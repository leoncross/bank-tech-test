function Balance() {}

Balance.prototype.calculate = function (
  allTransactions,
  newestTransaction,
) {
  const count = allTransactions.length;
  if (count === 0) {
    this._setStartingBalance(newestTransaction);
  } else if (newestTransaction.credit > 0) {
    newestTransaction.balance = allTransactions[count - 1].balance + newestTransaction.credit;
  } else {
    newestTransaction.balance = allTransactions[count - 1].balance - newestTransaction.debit;
  }
  return newestTransaction;
};

Balance.prototype._setStartingBalance = function (
  newestTransaction,
) {
  if (newestTransaction.credit > 0) {
    newestTransaction.balance = newestTransaction.credit;
  } else {
    newestTransaction.balance = -newestTransaction.debit;
  }
  return newestTransaction;
};
