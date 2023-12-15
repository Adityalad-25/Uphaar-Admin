import { useState } from "react"

import API_Constants from "../../constants/API_Constants"
import PoliceContext from "./PoliceContext"




const PoliceState = (props) => {

    const [policeStations, setPoliceStations] = useState([])

    const { API_CONSTANTS, LOCAL } = API_Constants
  const TOKEN = LOCAL.TOKEN


  const fetchAllPoliceStation = async () => {
    const reqOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        TOKEN: localStorage.getItem(TOKEN)
      },

    };
    // // console.log(API_CONSTANTS.LOGIN);
    let response = await fetch(API_CONSTANTS.ALL_POLICE, reqOptions);
    response = await response.json();
    setPoliceStations(response.results)
  

  }



  const addPoliceStation = async (fdata) => {

    const reqOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        TOKEN: localStorage.getItem(TOKEN)
      },
      body: JSON.stringify(fdata)
    };
    

    let response = await fetch(API_CONSTANTS.ADD_POLICE, reqOptions);
    response = await response.json();

    if (response.success === 1) {
      
      setPoliceStations(policeStations.concat(response.data))
    }
  }

  const updatePoliceStation = async (fdata) => {
    const reqOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        TOKEN: localStorage.getItem(TOKEN)
      },
      body: JSON.stringify(fdata)
    };
    // // console.log(API_CONSTANTS.LOGIN);
    let response = await fetch(API_CONSTANTS.UPDATE_POLICE, reqOptions);
    response = await response.json();

    if (response.success === 1) {

      let PoliceCopy =  JSON.parse(JSON.stringify(policeStations))
      for(let i =0;i<PoliceCopy.length;i++){ 
        if(PoliceCopy[i]._id === fdata._id){
          PoliceCopy[i]=  fdata
          break;
        }
      }
      setPoliceStations(PoliceCopy)
      console.log("updatedd!")
    }
  }

  const deletePoliceStation = async (_id) =>{
    const reqOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        TOKEN: localStorage.getItem(TOKEN)
      },
      body: JSON.stringify({_id})
    };

    let response = await fetch(API_CONSTANTS.DELETE_POLICE, reqOptions);
    response = await response.json();
    if (response.success === 1) {
      const newPolice = policeStations.filter((item)=>{
        return item._id !== _id;
      })
      setPoliceStations(newPolice)
    }
    
  }



    return (
        <PoliceContext.Provider value={ { policeStations,fetchAllPoliceStation,addPoliceStation,updatePoliceStation,deletePoliceStation } } >
            {props.children}
        </PoliceContext.Provider>
    )
}

export default PoliceState