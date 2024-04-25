/* bank account simulator */

class clientAccount {
  constructor(accountNumber, balance, debt, credit) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.debt = debt;
    this.credit = credit;
  }

  calculateBalance() {
    return this.balance - (this.debt + this.credit);
  }

  checkBalance() {
    const actualBalance = this.calculateBalance();
    if (actualBalance > 0) {
      alert(`Positive balance R$: ${actualBalance}`);
    }  else {
      alert(`Negative balance R$: ${actualBalance}`);
    }
  }
}

let accountNumber = prompt('Enter your account number: ');
let balance = parseFloat(prompt('Enter your account amount: '));
let debt = parseFloat(prompt('Enter the debit amount: '));
let credit = parseFloat(prompt('Enter the credit amount: '));

let account = new clientAccount(accountNumber, balance, debt, credit);

account.checkBalance();
