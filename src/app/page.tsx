
import Footer from "@/components/Footer";
import Login from "@/components/Login";



export default function App() {
  return (
    <>
      <header className="bg-slate-700 h-[100px] w-full">
        <h1 className="text-white text-2xl">Logo</h1>
      </header>

      <main className="h-svh w-full pt-8">
        <h1 className="text-8xl text-center">Expense Tracker</h1>
        <Login /> {/* via form or google*/}
      </main>
      <Footer />
    </>
  )
}