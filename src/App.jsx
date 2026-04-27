import { useState } from 'react'
import './App.css'
import Api from './components/page_search'
import { Search } from './components/search'

function Button({ value, func }) {
  return (
    <>
      <button className="
        w-14 h-14
        rounded-xl
        bg-gray-800 text-white
        hover:bg-gray-700
        active:scale-95
        transition
        font-semibold
        shadow-md
      " onClick={() => func({ value })}>{value}</button>
    </>
  );
}

function Button_Oper({ value, func }) {
  return (
    <>
      <button style={{ width: "50px", height: "50px" }} value={value} onClick={(e) => func(e.target.value)}>{value}</button>
    </>
  );
}

function Display({ value }) {
  return (
    <div className="
        w-full h-20
        bg-black text-green-400
        text-3xl font-mono
        flex items-center justify-end
        px-4 rounded-xl
        shadow-inner
        mb-4
      ">{value}</div>
  );
}

function App() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)

  const [dataApi1, setDataApi1] = useState([]);
  const [filtered1, setFiltered1] = useState([]);

  const [page, setPage] = useState(0)

  const [display, setDisplay] = useState("0")

  const changePage = (value) => {
    switch (value) {
      case 0:
        setPage(0);
        break;
      case 1:
        setPage(1);
        break;
      case 2:
        setPage(2);
        break;
      case 3:
        setPage(3);
        break;
    }
  }

  const Sumar = () => {

    const numero1 = Number(num1)
    const numero2 = Number(num2)

    const sum = numero1 + numero2

    console.log(sum)

    alert(`La suma es: ${sum}`)
  }

  const calcular = ({ value }) => {
    setDisplay(eval(display))
  }

  const operation = ({ value }) => {
    setDisplay((prev) => prev === "0" ? value : prev + value)
  }

  const borrar = ({ value }) => {
    setDisplay("0")
  }

  const eliminar = ({ value }) => {
    setDisplay((prev) => prev.slice(0, -1))
  }

  return (
    <>
      <div className="h-screen flex flex-col">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 p-5 gap-6 items-center">

          <div className="grid grid-cols-3 gap-2 bg-white/10 backdrop-blur-md rounded-xl p-2">

            <button
              onClick={() => changePage(1)}
              className={`py-2 rounded-lg transition font-bold
        ${page === 1
                  ? "bg-blue-600 text-white"
                  : "text-gray-800 hover:scale-130 hover:duration-350"
                }`}
            >
              SUMA SIMPLE
            </button>

            <button
              onClick={() => changePage(2)}
              className={`py-2 rounded-lg transition font-bold
        ${page === 2
                  ? "bg-blue-600 text-white"
                  : "text-gray-800 hover:scale-130 hover:duration-350"
                }`}
            >
              CALCULADORA
            </button>

            <button
              onClick={() => changePage(3)}
              className={`py-2 rounded-lg transition font-bold
        ${page === 3
                  ? "bg-blue-600 text-white"
                  : "text-gray-800 hover:scale-130 hover:duration-350"
                }`}
            >
              RICK&MORTY
            </button>

          </div>

          <div className="flex justify-end">
            <div className={`w-full md:w-3/4 lg:w-2/3 transition ${page === 3 ? "" : "opacity-50 pointer-events-none"
              }`}>
              <Search dataApi={dataApi1} setFiltered={setFiltered1} />
            </div>
          </div>

        </div>

        <div className="flex-1 overflow-y-auto pt-5">

          {page === 1 && (
            <div className="flex justify-center mt-10">

              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-2xl w-[320px]">

                <h1 className="text-white text-center text-xl font-bold mb-6">
                  Suma Simple
                </h1>

                <div className="mb-4">
                  <p className="text-gray-800 text-sm mb-1 font-bold">Número 1</p>
                  <input
                    type="number"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-black/40 text-white outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mb-6">
                  <p className="text-gray-800 text-sm mb-1 font-bold">Número 2</p>
                  <input
                    type="number"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-black/40 text-white outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button
                  onClick={Sumar}
                  className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition active:scale-95"
                >
                  SUMAR
                </button>

              </div>

            </div>
          )}

          {page === 2 && (
            <div className="flex justify-center items-center mt-10">
              <div className="bg-gray-900 p-6 rounded-2xl shadow-2xl w-[260px]">

                <h1 className="text-white text-center mb-4 font-bold">
                  Calculadora
                </h1>

                <Display value={display} />

                <div className="grid grid-cols-4 gap-2">
                  <Button value="C" func={borrar} />
                  <Button value="*" func={operation} />
                  <Button value="/" func={operation} />
                  <Button value="<=" func={eliminar} />

                  <Button value="7" func={operation} />
                  <Button value="8" func={operation} />
                  <Button value="9" func={operation} />
                  <Button value="+" func={operation} />

                  <Button value="4" func={operation} />
                  <Button value="5" func={operation} />
                  <Button value="6" func={operation} />
                  <Button value="-" func={operation} />

                  <Button value="1" func={operation} />
                  <Button value="2" func={operation} />
                  <Button value="3" func={operation} />
                  <Button value="=" func={calcular} />
                </div>

              </div>
            </div>
          )}

          {page === 3 && (
            <Api dataApi={dataApi1} filtered={filtered1} setDataApi={setDataApi1} setFiltered={setFiltered1} />
          )}
        </div>
      </div>
    </>
  )
}

export default App
