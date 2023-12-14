import React, { useState } from 'react'
import PoliceContext from './PoliceContext'
import API_Constants from '../../constants/API_Constants';

const PoliceState = (props) => {
    let policeInit = []
  const [police, setPolice] = useState(policeInit)

  const { API_CONSTANTS, LOCAL } = API_Constants
  const TOKEN = LOCAL.TOKEN
  const fetchAllPolice = async () => {
    const reqOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        TOKEN: localStorage.getItem(TOKEN)
      },

    };
    // console.log(API_CONSTANTS.LOGIN);
    let response = await fetch(API_CONSTANTS.ALL_POLICE, reqOptions);
    response = await response.json();
    policeInit = await response.results
    setPolice(policeInit)
    // return hospInit
    console.log('in fetch function');

  }
  const addPolice = async (pdata) => {
    const reqOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        TOKEN: localStorage.getItem(TOKEN)
      },
      body: JSON.stringify(pdata)
    };
    // console.log(API_CONSTANTS.LOGIN);
    let response = await fetch(API_CONSTANTS.ADD_POLICE, reqOptions);
    response = await response.json();
    if (response.success === 1) {
      // console.log(response.data)
      setPolice(police.concat(response.data))
    }
  }
  const updatePolice = async (hdata) => {
    const reqOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        TOKEN: localStorage.getItem(TOKEN)
      },
      body: JSON.stringify(hdata)
    };
    // console.log(API_CONSTANTS.LOGIN);
    let response = await fetch(API_CONSTANTS.UPDATE_POLICE, reqOptions);
    response = await response.json();
    if (response.success === 1) {
      let PoliceCopy =  JSON.parse(JSON.stringify(police))
      for(let i =0;i<police.length;i++){ 
        if(PoliceCopy._id === hdata._id){
          PoliceCopy[i] = hdata
          break;
        }
      }
      setPolice(PoliceCopy)
    }
  }
  // const deletePoliceStation = async (_id) =>{
  //   const reqOptions = {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //       TOKEN: localStorage.getItem(TOKEN)
  //     },
  //     body: JSON.stringify({_id})
  //   };

  //   let response = await fetch(API_CONSTANTS.DELETE_POLICE, reqOptions);
  //   response = await response.json();
  //   if (response.success === 1) {
  //     const newFire = police.filter((item)=>{
  //       return item._id !== _id;
  //     })
  //     setPolice(newFire)
  //   }
  // }
  return (
    <PoliceContext.Provider value={{police,fetchAllPolice,addPolice}}>
            {props.children}

    </PoliceContext.Provider>
  )
}

export default PoliceState