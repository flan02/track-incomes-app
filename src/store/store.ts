import { ITestCounter } from "@/test";
import { typeTransaction } from "@/types";
import { create } from "zustand";
import { persist } from 'zustand/middleware'

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


const initTransaction = {
  id: '',
  description: '',
  amount: 0,
  transactions: [],
};


export const useTransaction = create(
  persist<typeTransaction>(
    (set) => ({
      ...initTransaction,
      addTransaction: (transaction) =>
        set((state) => ({ transactions: [...state.transactions, transaction] })),
    }),
    {
      name: 'transaction-store',
    }
  )
);