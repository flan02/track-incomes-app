'use client'
import { useTransaction } from '@/store/store';
import { VictoryPie, VictoryLabel } from 'victory'
import styles from '@/components/(graphics)/graphic.module.css'
import Navbar from '@/components/Navbar';

type Props = {}

const Graphicspage = (props: Props) => {
  const transaction = useTransaction();

  const incomes = transaction.transactions.map(transaction => transaction.amount).filter(amount => amount > 0)
  const expenses = transaction.transactions.map(transaction => transaction.amount).filter(amount => amount < 0)
  const data = [{ x: `Ingresos: \n ${incomes.length}`, y: incomes.length }, { x: `Gastos: \n ${expenses.length}`, y: expenses.length }]

  const totalExpenses = Number(expenses.reduce((acc, curr) => acc + curr, 0)) * -1
  const totalIncomes = incomes.reduce((acc, curr) => acc + curr, 0)
  const expensePercent = Number((totalExpenses / totalIncomes).toFixed(2)) * 100
  const incomePercent = 100 - expensePercent
  const dataPercent = [{ x: `Ingresos: \n ${incomePercent}%`, y: incomePercent }, { x: `Gastos: \n ${expensePercent}%`, y: expensePercent }]


  return (
    <>
      <Navbar />
      <h1 className='text-4xl'>Graphicspage</h1>
      {
        transaction.transactions.length > 0
          ? <div className='w-[800px]'>
            <VictoryPie data={data} style={{}} colorScale={['blue', 'red']} width={500}
              animate={{ duration: 2000 }}
              labelComponent={<VictoryLabel angle={45} style={{ fontSize: 25, fill: "grey" }} />}
            />
          </div>
          : <p>Cargando graficas...</p>
      }

      {
        transaction.transactions.length > 0
          ? <div className='w-[800px]'>
            <VictoryPie data={dataPercent} style={{}} colorScale={['green', 'orange']} width={500}
              animate={{ duration: 2000 }}
              labelComponent={<VictoryLabel

                angle={45} style={{ fontSize: 25, fill: "grey" }} />}
            />
          </div>
          : <p>Cargando graficas...</p>
      }




    </>
  )
}

export default Graphicspage