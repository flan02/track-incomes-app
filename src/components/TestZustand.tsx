'use client'

import { useTest } from "@/store/store";



export default function TestZustand() {
  const testCounter = useTest();

  return (
    <main>
      <h1 className="border border-rose-500">Track Incomes</h1>
      <p>In this project will create the main app to check our daily cash flow</p>
      <p>Count: {testCounter.count}</p>
      <button onClick={testCounter.increment}>Increment</button>
      <button onClick={testCounter.decrement}>Decrement</button>
    </main>
  );
}