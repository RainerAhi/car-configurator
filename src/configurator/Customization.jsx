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
    color: "#1F51FF",
    name: "Blue",
  },
];

const breakColors = [
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
    color: "#1F51FF",
    name: "Blue",
  },
];

const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
  const [carColor, setCarColor] = useState(carColors[0]);
  const [breakColor, setBreakColor] = useState(breakColors[0]);

  return (
    <CustomizationContext.Provider
      value={{
        carColors,
        carColor,
        setCarColor,
        breakColors,
        breakColor,
        setBreakColor,
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
