import { useTransaction } from "@/store/store";
import { ITransaction } from "@/transaction";
import { GiCrossedBones } from "react-icons/gi";

type Props = {
  transaction: ITransaction;
  index: number;
}



const Transaction = (props: Props) => {
  //console.log(props.transaction);
  const transaction = useTransaction();
  const handlerDelete = () => {
    //console.log('deleting id transaction...', props.transaction.id);
    transaction.deleteTransaction(props.transaction.id);
  }
  return (
    <article key={props.index} className="w-[50%] bg-slate-700 text-white p-4 m-4 flex flex-col">

      <GiCrossedBones className="text-xl text-red-700 hover:text-red-400 mx-[95%]" onClick={handlerDelete} />

      <div>
        <p>{props.transaction.description}</p>
        <p>${`${parseFloat(props.transaction.amount).toFixed(2)}`}</p>
        <p>{`${new Date(props.transaction.date).toLocaleString()}`}</p>
      </div>
    </article>
  )
}

export default Transaction