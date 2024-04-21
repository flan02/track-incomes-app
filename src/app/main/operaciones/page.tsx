
// $ In this page we could add incomes and expenses, modify and delete 'em. We could also see a list of all the incomes and expenses. By day, month, year, etc.

import Navbar from "@/components/Navbar"

type Props = {}

const Operacionespage = (props: Props) => {
  return (
    <>
      <Navbar />
      <h1>Operacionespage</h1>
      <button type="button" className="bg-blue-500 px-4 py-2 text-white">ver Ingresos</button>
      <button type="button" className="bg-orange-500 px-4 py-2 text-white">ver Gastos</button>
    </>
  )
}

export default Operacionespage