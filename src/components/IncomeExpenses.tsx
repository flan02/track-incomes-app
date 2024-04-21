'use client'
import { useTransaction } from "@/store/store";
import React from "react";



type Props = {}

const IncomeExpenses = (props: Props) => {
  const [isIncomeActive, setIsIncomeActive] = React.useState(false)
  const [isExpenseActive, setExpenseIsActive] = React.useState(false)
  const transaction = useTransaction();
  const incomes = transaction.transactions.map(transaction => transaction.amount).filter(amount => amount > 0)
  const expenses = transaction.transactions.map(transaction => transaction.amount).filter(amount => amount < 0)
  //console.log(incomes, expenses);
  return (
    <>
      <h1 className="text-4xl">Total de ingresos/gastos</h1>
      <div className="text-center">
        <button
          onClick={() => { setIsIncomeActive(!isIncomeActive) }}
          type="button" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 text-white rounded-md">ver Ingresos</button>
        <button
          onClick={() => { setExpenseIsActive(!isExpenseActive) }}
          type="button" className="bg-orange-500 hover:bg-orange-600 px-4 py-2 text-white rounded-md">ver Gastos</button>
      </div>
      <section className="flex">
        {
          isIncomeActive &&
          <article className="bg-blue-200 w-[50%] text-2xl">
            <h4>
              {
                incomes.length > 0
                && `Ingresos Totales: ${incomes.length} para un total de $${incomes.reduce((acc, curr) => acc + curr).toFixed(2)}`
              }
            </h4>
          </article>
        }
        {
          isExpenseActive &&
          <article className="bg-red-200 w-[50%] text-2xl">
            <h4>
              {
                expenses.length > 0
                && `Gastos Totales: ${expenses.length} para un total de $${expenses.reduce((acc, curr) => acc + curr).toFixed(2)}`
              }
            </h4>
          </article>
        }
      </section>
    </>
  )
}

export default IncomeExpenses