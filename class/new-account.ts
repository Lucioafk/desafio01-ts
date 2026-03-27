import { DioAccount } from './DioAccount';

export class newAccount extends DioAccount {
  static getAccountNumber(): any {
      throw new Error('Method not implemented.');
  }
  static getName(): any {
      throw new Error('Method not implemented.');
  }
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  deposito = (value: number) => {
    this.deposit(value + 10)
  }
}