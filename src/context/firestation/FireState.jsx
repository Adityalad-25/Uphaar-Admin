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
    // console.log(API_CONSTANTS.LOGIN);
    let response = await fetch(API_CONSTANTS.ALL_FIRE, reqOptions);
    response = await response.json();
    setFireStations(response.results)
    
    // return hospInit

  }


    return (
        <FireContext.Provider value={ { fireStations,fetchAllFireStation } } >
            {props.children}
        </FireContext.Provider>
    )
}

export default FireState