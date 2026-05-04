import { useState } from "react";

interface ButtonProps {
  value: string;
  func: (args: { value: string }) => void;
}

function Button({ value, func }: ButtonProps) {
  return (
    <button
      className="w-14 h-14 rounded-xl bg-gray-800 text-white hover:bg-gray-700 active:scale-95 transition font-semibold shadow-md"
      onClick={() => func({ value })}
    >
      {value}
    </button>
  );
}

interface DisplayProps {
  value: string;
}

function Display({ value }: DisplayProps) {
  return (
    <div className="w-full h-20 bg-black text-green-400 text-3xl font-mono flex items-center justify-end px-4 rounded-xl shadow-inner mb-4">
      {value}
    </div>
  );
}

export default function CalculatorPage() {
  const [display, setDisplay] = useState<string>("0");

  const calcular = (): void => {
    try {
      // Usamos eval con cuidado al ser una calculadora de uso local o didáctico
      setDisplay(eval(display).toString());
    } catch {
      setDisplay("Error");
    }
  };

  const operation = ({ value }: { value: string }): void => {
    setDisplay((prev) => (prev === "0" ? value : prev + value));
  };

  const borrar = (): void => {
    setDisplay("0");
  };

  const eliminar = (): void => {
    setDisplay((prev) => (prev.length === 1 ? "0" : prev.slice(0, -1)));
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="bg-gray-900 p-6 rounded-2xl shadow-2xl w-[260px]">
        <h1 className="text-white text-center mb-4 font-bold">Calculadora</h1>

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
          
          {/* El botón igual (=) ejecuta la función calcular que procesa la operación completa */}
          <button
            className="w-14 h-14 rounded-xl bg-gray-800 text-white hover:bg-gray-700 active:scale-95 transition font-semibold shadow-md col-span-1"
            onClick={calcular}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}