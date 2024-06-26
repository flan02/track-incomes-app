import { ITransaction } from "./transaction";



export type typeTransaction = {
  transaction: ITransaction;
  transactions: ITransaction[];
  addTransaction: (transaction: ITransaction) => void;
  deleteTransaction: (id: string) => void;
  reset: () => void;
}