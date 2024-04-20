import { ITransaction } from "./transaction";



export type typeTransaction = {
  id: string;
  description: string;
  amount: number;
  transactions: ITransaction[];
  addTransaction: (transaction: ITransaction) => void;
}