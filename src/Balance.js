function Balance() {}

Balance.prototype.calculate = function(statement) {
  this.setStartingBalance(statement);
  for (i = 0; i < statement.length; i++) {
    if (i > 0) {
      if (statement[i]["credit"] > 0) {
        statement[i]["balance"] =
          statement[i - 1]["balance"] + statement[i]["credit"];
      } else {
        statement[i]["balance"] =
          statement[i - 1]["balance"] + statement[i]["debit"];
      }
    }
  }
  return statement;
};

Balance.prototype.setStartingBalance = function(statement) {
  if (statement[0]["credit"] > 0) {
    statement[0]["balance"] = +statement[0]["credit"];
  } else {
    statement[0]["balance"] = -statement[0]["debit"];
  }
  return statement;
};
