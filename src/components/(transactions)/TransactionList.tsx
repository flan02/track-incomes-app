import { useTransaction } from "@/store/store";
import Transaction from "./Transaction";

type Props = {}

const TransactionList = (props: Props) => {
  const transaction = useTransaction();

  return (
    <>
      {
        transaction.transactions.length > 0
          ? transaction.transactions.map((transaction, index) => {
            return (<Transaction key={index} transaction={transaction} index={index} />)
          })
          : <p>loading transactions...</p>
      }
    </>
  )
}

export default TransactionList