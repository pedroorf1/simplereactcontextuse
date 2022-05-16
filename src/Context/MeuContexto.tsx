import React from "react";

interface propsChildren {
  children: JSX.Element;
}

type ConstextType = {
  numero: number;
  setNumero: (newState: number) => void;
};

export const NossoContexto = React.createContext<ConstextType>({
  numero: 0,
  setNumero: () => null,
});
export const MeuContexto = ({ children }: propsChildren) => {
  const [numero, setNumero] = React.useState<number>(0);
  return (
    <NossoContexto.Provider value={{ numero, setNumero }}>
      {children}
    </NossoContexto.Provider>
  );
};
