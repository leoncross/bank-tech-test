# My Approach

I started off by mapping out the classes I was going to use. This initially took the view of:

1. Deposits
2. Withdraws
3. Statement printing

From here, I set up my workspace which included setting up jasmine testing suite, creating the files I needed. I then wrote my first failing test that manages deposits. I continued to follow the TDD approach - write a failing test, write a passing test, refactor until I achieved the required acceptance criteria. This can be viewed in my Github Commits on this repo.

When starting to transition to working on the Statement Printing class - I realised it could potentially be doing too much if it also handled balance calculations. Therefore I created a new class to also handle this.

A key decision that I envision being discussed focuses on how I handled the date of transaction. I took the decision to handle date by purely passing it through as a string, as there was no requirement within the spec to use the js Time Object. The other key reason is that by designing it strictly according to OOD, if the utilisation of the Time Object was a future requirement, no changes would have to be made to the software.

# How to produce result:

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
