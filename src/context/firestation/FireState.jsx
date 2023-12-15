import { useState } from "react"
import FireContext from "./FireContext"
import API_Constants from "../../constants/API_Constants"




const FireState = (props) => {

    const [fireStations, setFireStations] = useState([])

    const { API_CONSTANTS, LOCAL } = API_Constants
  const TOKEN = LOCAL.TOKEN


  const fetchAllFireStation = async () => {
    const reqOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        TOKEN: localStorage.getItem(TOKEN)
      },

    };
    // // console.log(API_CONSTANTS.LOGIN);
    let response = await fetch(API_CONSTANTS.ALL_FIRE, reqOptions);
    response = await response.json();
    setFireStations(response.results)
  

  }



  const addFireStation = async (fdata) => {
    const reqOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        TOKEN: localStorage.getItem(TOKEN)
      },
      body: JSON.stringify(fdata)
    };
    // // console.log(API_CONSTANTS.LOGIN);
    let response = await fetch(API_CONSTANTS.ADD_FIRE, reqOptions);
    response = await response.json();
    if (response.success === 1) {
      
      setFireStations(fireStations.concat(response.data))
    }
  }

  const updateFireStation = async (fdata) => {
    const reqOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        TOKEN: localStorage.getItem(TOKEN)
      },
      body: JSON.stringify(fdata)
    };
    // // console.log(API_CONSTANTS.LOGIN);
    let response = await fetch(API_CONSTANTS.UPDATE_FIRE, reqOptions);
    response = await response.json();

    if (response.success === 1) {

      let FireCopy =  JSON.parse(JSON.stringify(fireStations))
      for(let i =0;i<FireCopy.length;i++){ 
        if(FireCopy[i]._id === fdata._id){
          FireCopy[i]=  fdata
          break;
        }
      }
      setFireStations(FireCopy)
      console.log("updatedd!")
    }
  }

  const deleteFirestation = async (_id) =>{
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
      const newFire = fireStations.filter((item)=>{
        return item._id !== _id;
      })
      setFireStations(newFire)
    }
    
  }



    return (
        <FireContext.Provider value={ { fireStations,fetchAllFireStation,addFireStation,updateFireStation,deleteFirestation } } >
            {props.children}
        </FireContext.Provider>
    )
}

export default FireState