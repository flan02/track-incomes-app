'use client'
import { useTransaction } from "@/store/store";
import React from "react";

type Props = {}


export const TransactionForm = (_props: Props) => {

  const [description, setDescription] = React.useState("");
  const [amount, setAmount] = React.useState(0);
  const transaction = useTransaction();

  const onSubmit = (e: any) => {
    e.preventDefault();

    transaction.addTransaction({
      //id: window.crypto.randomUUID(),
      id: "1",
      description,
      amount: +amount,
    });


  }
  return (
    <div className="w-[50%] mx-auto mt-4">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter a description"
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
          value={description}
        />
        <input
          type="number"
          onChange={(e) => setAmount(parseFloat(e.target.value))}
          step="0.01"
          placeholder="0.00"
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
          value={amount}
        />
        <button
          className="bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full disabled:opacity-50"
          disabled={!description || !amount}
        >Add Transaction</button>
      </form>
    </div>
  )
}

