function Balance() {}

Balance.prototype.calculate = function (allTransactions, newestTransaction) {
  const count = allTransactions.length;
  if (count === 0) {
    this._setStartingBalance(newestTransaction);
  } else {
    this._settingBalanceByCredit(allTransactions, newestTransaction, count);
    this._settingBalanceByDebit(allTransactions, newestTransaction, count);
  }
  return newestTransaction;
};

Balance.prototype._setStartingBalance = function (newestTransaction) {
  if (newestTransaction.credit > 0) {
    newestTransaction.balance = newestTransaction.credit;
  } else {
    newestTransaction.balance = -newestTransaction.debit;
  }
  return newestTransaction;
};

Balance.prototype._settingBalanceByCredit = function (allTransactions, newestTransaction, count) {
  if (newestTransaction.debit === 0) {
    newestTransaction.balance = allTransactions[count - 1].balance + newestTransaction.credit;
  }
};

Balance.prototype._settingBalanceByDebit = function (allTransactions, newestTransaction, count) {
  if (newestTransaction.credit === 0) {
    newestTransaction.balance = allTransactions[count - 1].balance - newestTransaction.debit;
  }
};
