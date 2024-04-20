import { ITransaction } from "@/transaction";


type Props = {
  transaction: ITransaction;
  index: number;
}

const Transaction = (props: Props) => {
  //console.log(props.transaction);
  return (
    <div key={props.index} className="bg-slate-700 text-white p-4 m-4">
      <p>{props.transaction.description}</p>
      <p>${`${parseFloat(props.transaction.amount).toFixed(2)}`}</p>
      <p>{`${new Date(props.transaction.date).toLocaleString()}`}</p>
    </div>
  )
}

export default Transaction