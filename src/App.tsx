import React from "react";
import { NossoContexto } from "./Context/MeuContexto";

const App: React.FC = () => {
  type ConstextType = {
    numero: number;
    setNumero: (newState: number) => void;
  };

  const { numero, setNumero } = React.useContext<ConstextType>(NossoContexto);
  const MyRef = React.useRef<HTMLInputElement>(null);

  const handleclick = () => {
    return setNumero(numero + 1);
  };
  const handleClear = () => {
    return setNumero(0);
  };

  const getRef = () => {
    let myData = MyRef.current?.valueAsNumber;
    if (!myData) myData = 0;
    myData = myData * 5;
    console.info("-----", myData);
    return;
  };

  return (
    <div className="container">
      <div className="exibir">
        <span>{numero}</span>
      </div>
      <button onClick={handleclick}> + 1</button>
      <button onClick={handleClear}> Clear</button>
      Input: <input type="number" defaultValue="100" ref={MyRef} />
      <button onClick={getRef}> Get Ref</button>
    </div>
  );
};

export default App;
