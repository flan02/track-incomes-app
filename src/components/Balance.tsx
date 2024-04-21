'use client'
import { useTransaction } from "@/store/store";
import Navbar from "./Navbar";


type Props = {}

const Balance = (props: Props) => {
  const transaction = useTransaction();
  return (
    <>
      <Navbar />
      <h1 className="text-6xl mt-4">
        Balance: ${transaction.transactions.reduce((acc, curr) => acc + curr.amount, 0)}
      </h1>
    </>

  )
}

export default Balance