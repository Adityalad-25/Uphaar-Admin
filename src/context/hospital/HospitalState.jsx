import { useContext, useState } from "react";
import HospitalContext from "./HospitalContext";
import API_Constants from "../../constants/API_Constants";

const HospitalState = (props) => {

  let hospInit = []
  const [hospitals, setHospitals] = useState(hospInit)

  const { API_CONSTANTS, LOCAL } = API_Constants
  const TOKEN = LOCAL.TOKEN


  const fetchAllHospitals = async () => {
    const reqOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        TOKEN: localStorage.getItem(TOKEN)
      },

    };
    // // console.log(API_CONSTANTS.LOGIN);
    let response = await fetch(API_CONSTANTS.ALL_HOSPITAL, reqOptions);
    response = await response.json();
    hospInit = await response.results
    setHospitals(hospInit)
    // return hospInit

  }
  const addHospital = async (hdata) => {
    const reqOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        TOKEN: localStorage.getItem(TOKEN)
      },
      body: JSON.stringify(hdata)
    };
    // // console.log(API_CONSTANTS.LOGIN);
    let response = await fetch(API_CONSTANTS.ADD_HOSPITAL, reqOptions);
    response = await response.json();
    if (response.success === 1) {
      setHospitals(hospitals.concat(response.data))
    }
  }
  const updateHospital = async (hdata) => {
    const reqOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        TOKEN: localStorage.getItem(TOKEN)
      },
      body: JSON.stringify(hdata)
    };
    // // console.log(API_CONSTANTS.LOGIN);
    let response = await fetch(API_CONSTANTS.UPDATE_HOSPITAL, reqOptions);
    response = await response.json();

    if (response.success === 1) {

      let HospitalCopy =  JSON.parse(JSON.stringify(hospitals))
      for(let i =0;i<HospitalCopy.length;i++){ 
        if(HospitalCopy[i]._id === hdata._id){
          HospitalCopy[i]=  hdata
          break;
        }
      }
      setHospitals(HospitalCopy)
      console.log("updatedd!")
    }
  }

  const deleteHospital = async (_id) =>{
    const reqOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        TOKEN: localStorage.getItem(TOKEN)
      },
      body: JSON.stringify({_id})
    };

    let response = await fetch(API_CONSTANTS.DELETE_HOSP, reqOptions);
    response = await response.json();
    if (response.success === 1) {
      const newHosp = hospitals.filter((item)=>{
        return item._id !== _id;
      })
      setHospitals(newHosp)
    }
  }


  return (
    <HospitalContext.Provider value={{deleteHospital,updateHospital, setHospitals, hospitals, fetchAllHospitals, addHospital }}>
      {props.children}
    </HospitalContext.Provider>
  );
};

export default HospitalState;
