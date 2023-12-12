import { useContext } from "react";
import HospitalContext from "./HospitalContext";

const HospitalState = (props) => {
  const data = "gb";
  return (
    <HospitalContext.Provider value={{ data }}>
      {props.children}
    </HospitalContext.Provider>
  );
};

export default HospitalState;
