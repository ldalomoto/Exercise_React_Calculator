import { useState } from 'react'
import './App.css'

function Button({ value, func }) {
  return (
    <>
      <button style={{width: "50px", height: "50px"}} onClick={() => func({value})}>{value}</button>
    </>
  );
}

function Button_Oper({ value, func }) {
  return (
    <>
      <button style={{width: "50px", height: "50px"}} value={value} onClick={(e) => func(e.target.value)}>{value}</button>
    </>
  );
}

function Display ({value}) {
  return(
    <div className='display' style={{width: "200px", height: "50px"}}>{value}</div>
  );
}

function App() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)

  const [page1, setPage1] = useState(false)
  const [page2, setPage2] = useState(false)

  const [display, setDisplay] = useState("0")

  const changeP1 = () => {
    if (page1 === false) {
      setPage1(true)
    } else {
      setPage1(false)
    }
  }

  const changeP2 = () => {
    if (page2 === false) {
      setPage2(true)
    } else {
      setPage2(false)
    }
  }

  const Sumar = () => {

    const numero1 = Number(num1)
    const numero2 = Number(num2)

    const sum = numero1 + numero2

    console.log(sum)

    alert(`La suma es: ${sum}`)
  }

  const calcular = ({value} ) => {
    setDisplay(eval(display))
  }

  const operation = ( {value} ) => {
    setDisplay((prev) => prev === "0" ? value : prev + value)
  }

  const borrar = ( {value} ) => {
    setDisplay("0")
  }

  const eliminar = ( {value} ) => {
    setDisplay((prev) => prev.slice(0, -1))
  }

  return (
    <>
      <div className='botones'>
        <button style={{ width: '100px' }} onClick={() => changeP1()}>OPCION1</button>
        <button style={{ width: '100px' }} onClick={() => changeP2()}>OPCION2</button>
      </div>

      {page1 && (
        <div className='contenedor'>
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
        </div>)
      }

      {page2 && (
        <div className='contenedor'>
          <div>
            <h1>Calculadora Completa</h1>
          </div>

          <Display value={display} />

          <div>
            <Button value="C" func={borrar}/>
            <Button value="*" func={operation}/>
            <Button value="/" func={operation}/>
            <Button value="<=" func={eliminar}/>
          </div>

          <div>
            <Button value="7" func={operation}/>
            <Button value="8" func={operation}/>
            <Button value="9" func={operation}/>
            <Button value="+" func={operation}/>
          </div>

          <div>
            <Button value="4" func={operation}/>
            <Button value="5" func={operation}/>
            <Button value="6" func={operation}/>
            <Button value="-" func={operation}/>
          </div>

          <div>
            <Button value="1" func={operation}/>
            <Button value="2" func={operation}/>
            <Button value="3" func={operation}/>
            <Button value="=" func={calcular}/>
          </div>
        </div>)
      }
    </>
  )
}

export default App
