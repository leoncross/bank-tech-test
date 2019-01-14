# Bank tech test

Approach:

As listed within the requirements, there are three key aspects of this tech-test.

1. Deposits
2. Withdraws
3. Balance
4. Statement printing

From here, I set up my workspace which included setting up jasmine testing suite, creating the files I needed. I then wrote my first failing test that manages deposits.

I slowly went through the TDD process - red, green refactor (as can be seen by my github commits)

# to produce result:

To produce the following acceptance criteria result:

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

Open up the index.html or the SpecRunner and navigate to the console.
From here, copy the following commands into the console.

```
deposit = new Deposit
withdraw = new Withdraw
print = new PrintStatement
balance = new Balance

deposit.amount("10/01/2012", 1000)
deposit.amount("13/01/2012", 2000)
withdraw.amount("13/01/2012", 500)

print.combineDepositWithdraw(deposit.deposits, withdraw.withdrawals)

balance.calculate(print.combined)

print.printProcess()
```

### Set Requirements

- You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```
