import { createContext, useContext, useState } from "react";

const carColors = [
  {
    color: "#cd0133",
    name: "Guards Red",
  },
  {
    color: "#000000",
    name: "Black",
  },
  {
    color: "#00194b",
    name: "Blue Metallic",
  },
  {
    color: "#c7c7bf",
    name: "Crayon",
  },
];

const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
  const [carColor, setCarColor] = useState(carColors[0]);

  return (
    <CustomizationContext.Provider
      value={{
        carColors,
        carColor,
        setCarColor,
      }}
    >
      {props.children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  return context;
};
