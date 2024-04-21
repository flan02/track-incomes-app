'use client'
import { useTransaction } from "@/store/store";
import Transaction from "./Transaction";
import Navbar from "../Navbar";
import React from "react";
import { ITransaction } from "@/transaction";

type Props = {}

const TransactionList = (props: Props) => {
  const transaction = useTransaction();
  const [filter, setFilter] = React.useState('all');
  const handlerDelete = () => {
    transaction.reset();
  }
  console.log(filter);

  const filteredTransaction = (transactions: ITransaction[], filter: any) => {
    if (filter === 'all') return transactions;
    if (filter === 'income') return transactions.filter(transaction => transaction.amount > 0);
    if (filter === 'expense') return transactions.filter(transaction => transaction.amount < 0);
    return [];
  }

  return (
    <>
      <Navbar />
      <h1 className="text-4xl">Transaction List</h1>

      <div className="flex">
        <h3 className="text-xl mr-4">Filter:</h3>
        <select
          onChange={(e) => setFilter(e.target.value)}
          name="" id="" className="border border-slate-500 bg-slate-400">
          <option value="all">Todos</option>
          <option value="income">Ingresos</option>
          <option value="expense">Egresos</option>
        </select>
      </div>

      {
        transaction.transactions.length > 0
          ?
          filteredTransaction(transaction.transactions, filter).map((transaction, index) =>
            <Transaction key={index} transaction={transaction} index={index} />
          )
          : <p className="text-center text-lg">loading transactions...</p>
      }

      <div className="text-center">
        {
          transaction.transactions.length > 0 && <button onClick={handlerDelete} type="button" className="rounded-md text-white bg-slate-800 hover:bg-slate-700 px-4 py-2 ">Delete All</button>
        }
      </div>
    </>
  )
}

export default TransactionList