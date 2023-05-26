class BankAccount{

    constructor ( accountNumber, accountHolder,  balance){
        this.accountNumber = String(accountNumber);
        this.accountHolder=String(accountHolder);
        this.balance=Number(balance)
    }
   
  
    get getAccountNumber() {
        return this.accountNumber;
      }
    
      get getAccountHolder() {
        return this.accountHolder;
      }
    
      get getBalance() {
        return this.balance;
      }
    
    
      deposit(amount) {

        this.balance += amount;
        console.log(`$${amount} Deposited  into account ${this.accountNumber}`);
      }
    
      withdraw(amount) {
        if (amount <= this.balance) {
          this.balance -= amount;
          console.log(`  $${amount} withdrawn from account ${this.accountNumber} account number`);
        } else {
          console.log("Your Account is Empty!");
        }
      }

}

  
  class SavingsAccount extends BankAccount {
    constructor(accountNumber, accountHolder, balance, interestRate) {
      super(accountNumber, accountHolder, balance);
      this.interest_Rate = interestRate;
    }
  
  
    get interestRate() {
      return this.interest_Rate;
    }
  
   
    calculateInterest() {
      const interest = this.balance * this.interest_Rate;
      console.log(`The interest rate for ${this.accountNumber} account number is : $${interest}`);
    }
  }
  
 
  class CheckingAccount extends BankAccount {
    constructor(accountNumber, accountHolder, balance, overdraftLimit) {
      super(accountNumber, accountHolder, balance);
      this.overdraft_Limit = overdraftLimit;
    }
  
    
    get overdraftLimit() {
      return this.overdraft_Limit;
    }
  
    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`$${amount} Withdrawn  from account ${this.accountNumber}`);
      } else if (amount <= this.balance + this.overdraft_Limit) {
        this.balance -= amount;
        console.log(` $${amount}Withdrawn (including overdraft) from account ${this.accountNumber}`);
      } else {
        console.log("the withdrawn amount is more than the overdraft limit!");
      }
    }
  }
   
   let savingsAccount = new SavingsAccount("AJK31", "ALI PRINCE", 10000, 0.10);
   let checkingAccount = new CheckingAccount("AJK32", "DOCTOR MIKE ", 4000, 500);
   

   console.log(`Account number: ${savingsAccount.accountNumber}`);
   console.log(`Account holder: ${savingsAccount.accountHolder}`);
   console.log(`Balance: $${savingsAccount.balance.toFixed(2)}`);
   
   console.log(`Account number: ${checkingAccount.accountNumber}`);
   console.log(`Account holder: ${checkingAccount.accountHolder}`);
   console.log(`Balance: $${checkingAccount.balance.toFixed(2)}`);
   
   
   savingsAccount.deposit(1000);
   checkingAccount.deposit(500);

   savingsAccount.withdraw(2000);
   checkingAccount.withdraw(2500);

   savingsAccount.calculateInterest();