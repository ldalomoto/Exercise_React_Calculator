import { useState } from "react";

export default function SimpleSumPage() {
  const [num1, setNum1] = useState<number | string>(0);
  const [num2, setNum2] = useState<number | string>(0);

  const Sumar = (): void => {
    const numero1: number = Number(num1);
    const numero2: number = Number(num2);
    const sum: number = numero1 + numero2;
    
    console.log(sum);
    alert(`La suma es: ${sum}`);
  };

  return (
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
  );
}