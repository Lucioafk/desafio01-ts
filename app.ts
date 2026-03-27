import { newAccount } from './class/new-account';
import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount = new PeopleAccount(10, 'Mickael Luiz', 1010)
peopleAccount.deposit(20)
peopleAccount.withdraw(10)
console.log('Nome da conta: ', peopleAccount.getName());
console.log('Numero da conta: ', peopleAccount.getAccountNumber());
console.log('Saldo final: ', peopleAccount.getBalance());

console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

const companyAccount = new CompanyAccount('DIOSoftware', 2020)
companyAccount.deposit(30)
companyAccount.withdraw(35)
companyAccount.getLoan(30)
companyAccount.withdraw(35)
console.log('Nome da conta: ', companyAccount.getName());
console.log('Numero da conta: ', companyAccount.getAccountNumber());
console.log('Saldo Final: ', companyAccount.getBalance());

console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

const TypeAccount = new newAccount('Novo Tipo', 1000)
TypeAccount.deposit(40)
TypeAccount.withdraw(15)
console.log('Nome da conta: ', TypeAccount.getName());
console.log('Numero da conta: ', TypeAccount.getAccountNumber());
console.log('Saldo final: ', TypeAccount.getBalance());