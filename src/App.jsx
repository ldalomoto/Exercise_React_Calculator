import { useState } from 'react'
import './App.css'

function App() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)

  const Sumar = () => {
    const numero1 = Number(num1)  
    const numero2 = Number(num2)

    const sum = numero1 + numero2

    console.log(sum)

    alert(`La suma es: ${sum}`)
  } 

  return (
    <>
      <div> 
        <h1>Calculadora</h1>
      </div>
      <div>
        <h3>number 1</h3>
        <input id='num1' type='number' value={num1} placeholder='ingresa tu numero' onChange={(e) => setNum1(e.target.value)} />
      </div>

      <div>
        <h3>number 2</h3>
        <input id='num2' type='number' value={num2} placeholder='ingresa tu numero' onChange={(e) => setNum2(e.target.value)} />
      </div>

      <div>
        <button onClick={() => Sumar()}>SUMAR</button>
      </div>
    </>
  )
}

export default App
