'use client'
import { useTransaction } from "@/store/store";
import React, { useEffect } from "react";
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

  const [description, setDescription] = React.useState<string>("");
  const [amount, setAmount] = React.useState<number>(0.00);
  const [response, setResponse] = React.useState<string>("");
  const transaction = useTransaction();

  const form = useForm();

  const onSubmit = form.handleSubmit(async (data) => {
    //console.log('initializing transaction');
    transaction.addTransaction({
      id: (transaction.transactions.length + 1).toString(),
      description: data.description,
      amount: +data.amount, // * convert string value to number (+)
      date: new Date()
    });
    setDescription(""); // ! it doesn't work
    setAmount(0.00); // ! it doesn't work
    setResponse("Gasto ingresado correctamente");
  });

  useEffect(() => {

    setTimeout(() => {

      setResponse("");
    }, 1500);

  }, [transaction.transactions]);



  return (
    <>
      <Form action="" control={form.control} onSubmit={onSubmit} className="w-[50%] mx-auto mt-4 h-60 flex flex-col items-center justify-evenly pt-4 bg-black text-white">
        <input
          autoComplete="off"
          type="text" {...(form.register('description', opts))} placeholder="agregar descripcion" className="text-emerald-600 bg-slate-700" /> <br />
        {form.formState.errors.description && <span>{`${form.formState.errors.description?.message}`}</span>}
        <input inputMode="none"
          type="number" {...(form.register('amount', opts))} placeholder="$0.00" className="text-emerald-600 bg-slate-700" /> <br />
        {form.formState.errors.amount && <span>{`${form.formState.errors.amount?.message}`}</span>}
        <button
          className="bg-white text-slate-800 border border-slate-800 px-4 py-2 rounded-md hover:bg-slate-700 hover:text-emerald-600 hover:border hover:border-white"
        >Add Transaction
        </button>
      </Form>

      {
        response && <p className="text-center text-green-700 text-xl">{response}</p>
      }


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