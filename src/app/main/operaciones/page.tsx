
// $ In this page we could add incomes and expenses, modify and delete 'em. We could also see a list of all the incomes and expenses. By day, month, year, etc.

import IncomeExpenses from "@/components/IncomeExpenses"
import Navbar from "@/components/Navbar"

type Props = {}

const Operacionespage = (props: Props) => {
  return (
    <>
      <Navbar />
      <h1 className="text-4xl">Operacionespage</h1>

      <IncomeExpenses />
    </>
  )
}

export default Operacionespage