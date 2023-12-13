import { useContext, useState } from "react";
import HospitalContext from "./HospitalContext";
import API_Constants from "../../constants/API_Constants";

const HospitalState = (props) => {
  
  let hospInit = []
  const [hospitals,setHospitals] = useState(hospInit)

  const {API_CONSTANTS,LOCAL} = API_Constants
  const TOKEN = LOCAL.TOKEN
  const fetchAllHospitals = async ()=>{
    const reqOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json",
                TOKEN : localStorage.getItem(TOKEN) },
      
    };
    // console.log(API_CONSTANTS.LOGIN);
    let response = await fetch(API_CONSTANTS.ALL_HOSPITAL, reqOptions);
    response = await response.json();
    hospInit = await response.results
   setHospitals(hospInit)
    // return hospInit

  }

  


  return (
    <HospitalContext.Provider value={{ setHospitals,hospitals,fetchAllHospitals }}>
      {props.children}
    </HospitalContext.Provider>
  );
};

export default HospitalState;
