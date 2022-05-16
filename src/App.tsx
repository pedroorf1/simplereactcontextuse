import React from "react";
import { NossoContexto } from "./Context/MeuContexto";

const App: React.FC = () => {
  type ConstextType = {
    numero: number;
    setNumero: (newState: number) => void;
  };

  const { numero, setNumero } = React.useContext<ConstextType>(NossoContexto);

  const handleclick = () => {
    return setNumero(numero + 1);
  };
  const handleClear = () => {
    return setNumero(0);
  };

  return (
    <div className="container">
      <div className="exibir">
        <span>{numero}</span>
      </div>
      <button onClick={handleclick}> + 1</button>
      <button onClick={handleClear}> Clear</button>
    </div>
  );
};

export default App;
