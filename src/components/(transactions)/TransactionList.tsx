'use client'
import { useTransaction } from "@/store/store";
import Transaction from "./Transaction";
import Navbar from "../Navbar";

type Props = {}

const TransactionList = (props: Props) => {
  const transaction = useTransaction();
  const handlerDelete = () => {
    transaction.reset();
  }
  return (
    <>
      <Navbar />
      {
        transaction.transactions.length > 0
          ?
          transaction.transactions.map((transaction, index) =>
            <Transaction key={index} transaction={transaction} index={index} />
          )
          : <p className="text-center text-lg">loading transactions...</p>
      }
      {
        transaction.transactions.length > 0 && <button onClick={handlerDelete} type="button" className="ml-52 rounded-md text-white bg-red-500 hover:bg-red-700 px-4 py-2 hover:px-6">Delete All</button>
      }
    </>
  )
}

export default TransactionList