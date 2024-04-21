
import { typeTransaction } from "@/types";
import { create } from "zustand";
import { persist } from 'zustand/middleware'
/*
export const useTest = create(
  persist<ITestCounter>(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
    }),
    {
      name: 'count-store',
    }
  )
);
*/

const initTransaction = {
  transaction: {
    id: '',
    description: '',
    amount: 0,
    date: new Date(),
  },
  transactions: [],

};


export const useTransaction = create(
  persist<typeTransaction>(
    (set) => ({
      ...initTransaction,
      addTransaction: (transaction) =>
        set((state) => ({ transactions: [...state.transactions, transaction] })),
      deleteTransaction: (id) =>
        set((state) => ({ transactions: state.transactions.filter((transaction) => transaction.id !== id) })),
      reset: () => set(initTransaction),
    }),
    {
      name: 'transaction-store',
    },
  ),

);