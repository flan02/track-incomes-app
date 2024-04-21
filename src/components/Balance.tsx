'use client'
import { useTransaction } from "@/store/store";
import Navbar from "./Navbar";


type Props = {}

const Balance = (props: Props) => {
  const transaction = useTransaction();
  const amounts = transaction.transactions.map(transaction => transaction.amount);
  const balance = transaction.transactions.reduce((acc, curr) => acc + curr.amount, 0) // * 2nd param: accumulator start at 0
  //console.log(amounts, balance);
  return (
    <>
      <Navbar />
      <h1 className="text-6xl mt-4">
        Balance: ${balance.toFixed(2)}
      </h1>
    </>

  )
}

export default Balance