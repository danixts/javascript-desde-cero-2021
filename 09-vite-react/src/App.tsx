import React, { useState } from "react"
import logo from "./logo.svg"

function App() {
  const [count, setCount] = useState<number>(0)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count > 0 ? count - 1 : 0)
  return (
    <div className="flex items-center flex-col justify-center h-screen">
      <div>
        <div className="flex justify-center items-center flex-col">
          <img src={logo} width={160} alt="logo" />
          <p className="text-4xl font-semibold p-4 text-gray-300">Hello Vite + React!</p>
        </div>
        <div className="card p-8 mt-4">
          <h2 className="text-4xl font-semibold p-4 text-white">{count}</h2>
          <div className="flex flex-row">
            <button className="btn" onClick={decrement}>
              Decrement
            </button>
            <button className="btn" onClick={increment}>
              Increment
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
