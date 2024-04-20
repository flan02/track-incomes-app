'use client'
import { useTransaction } from "@/store/store";
import React from "react";
import { Form, useForm } from "react-hook-form";
import TransactionList from "./TransactionList";

type Props = {}
const opts = {
  required: {
    value: true,
    message: `This field is required`
  },
  minLength: { value: 3, message: 'Min length is 3' },
  maxLength: { value: 30, message: 'Max length is 20' }
}

export const TransactionForm = (_props: Props) => {

  const [description, setDescription] = React.useState<string>("add description");
  const [amount, setAmount] = React.useState<number>(0.00);
  const transaction = useTransaction();

  const form = useForm();

  const onSubmit = form.handleSubmit(async (data) => {
    console.log('initializing transaction');
    transaction.addTransaction({
      id: "1",
      description: data.description,
      amount: +data.amount,
      date: new Date()
    });
    setDescription("");
    setAmount(0.00);
  });


  return (
    <>
      <Form action="" control={form.control} onSubmit={onSubmit} className="w-[50%] mx-auto mt-4 h-60 flex flex-col items-center justify-evenly pt-4 bg-black text-white">
        <input
          autoComplete="off"
          type="text" {...(form.register('description', opts))} placeholder="transaction description" className="text-emerald-600 bg-slate-700" /> <br />
        {form.formState.errors.description && <span>{`${form.formState.errors.description?.message}`}</span>}
        <input inputMode="none"
          type="number" {...(form.register('amount', opts))} placeholder="$0.00" className="text-emerald-600 bg-slate-700" /> <br />
        {form.formState.errors.amount && <span>{`${form.formState.errors.amount?.message}`}</span>}
        <button
          className="bg-white text-slate-800 border border-slate-800 px-4 py-2 rounded-md hover:bg-slate-700 hover:text-emerald-600 hover:border hover:border-white"
        >Add Transaction
        </button>
      </Form>

      <br /><br /><br />
      <h2>Transactions</h2>
      <TransactionList />

    </>
  )
}

/* 
 <p>
        {
          transaction && transaction.transactions.length > 0
            ? JSON.stringify(transaction.transactions)
            : <span>loading transactions...</span>
        }
      </p>
*/