import { useContext, useState } from "react";
import FireStationContext from "./FireStationContext";
import API_Constants from "../../constants/API_Constants";

const FireStationState = (props) => {

  let fireInit = []
  const [firestations, setFireStations] = useState(fireInit)

  const { API_CONSTANTS, LOCAL } = API_Constants
  const TOKEN = LOCAL.TOKEN


  const fetchAllFireStations = async () => {
    const reqOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        TOKEN: localStorage.getItem(TOKEN)
      },

    };
    
    let response = await fetch(API_CONSTANTS.ALL_FIRESTATION, reqOptions);
    response = await response.json();
    fireInit = await response.results
    setFireStations(fireInit)
    // return fireinit

  const addFireStation = async (fdata) => {
    const reqOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        TOKEN: localStorage.getItem(TOKEN)
      },
      body: JSON.stringify(fdata)
    };
    // console.log(API_CONSTANTS.LOGIN);
    let response = await fetch(API_CONSTANTS.ADD_FIRESTATION, reqOptions);
    response = await response.json();
    if (response.success === 1) {
      setFireStations(firestations.concat(response.data))
    }
  }
  const updateFirestation = async (fdata) => {
    const reqOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        TOKEN: localStorage.getItem(TOKEN)
      },
      body: JSON.stringify(fdata)
    };
    // console.log(API_CONSTANTS.LOGIN);
    let response = await fetch(API_CONSTANTS.UPDATE_FIRESTATION, reqOptions);
    response = await response.json();
    if (response.success === 1) {
      let FirestationCopy =  JSON.parse(JSON.stringify(firestations))
      for(let i =0;i<FirestationCopy.length;i++){ 
        if(FirestationCopy._id === fdata._id){
            FirestationCopy[i] = fdata
          break;
        }
      }
      setFireStations(FirestationCopy)
    }
  }

  const deletefireStation = async (_id) =>{
    const reqOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        TOKEN: localStorage.getItem(TOKEN)
      },
      body: JSON.stringify({_id})
    };

    let response = await fetch(API_CONSTANTS.DELETE_FIRE, reqOptions);
    response = await response.json();
    if (response.success === 1) {
      const newfire = firestations.filter((item)=>{
        return item._id !== _id;
      })
      setFireStations(newfire)
    }
  }


  return (
    <FireStationContext.Provider value={{deletefireStation,updateFirestation, setFireStations,firestations, fetchAllFireStations, addFireStation }}>
      {props.children}
    </FireStationContext.Provider>
  );
};
}
export default FireStationState;
