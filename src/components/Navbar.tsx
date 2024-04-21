import Link from "next/link"


type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className="flex flex-col h-max bg-gray-800 p-4 text-white">

      <Link href="/main/agregar" >nueva transaccion</Link>
      <Link href="/main/operaciones" >ver ingresos/gastos</Link>
      <Link href="/main/lista">ver lista</Link>
      <Link href="/main/balance">ver balance</Link>
      <Link href="/main/graficos">graficas</Link>
      <Link href="/docs">documentacion</Link>
      <Link href="/premium">premium</Link>
      <Link href="/main/">opciones</Link>
      <Link href="/main">volver</Link>
    </nav>
  )
}

export default Navbar