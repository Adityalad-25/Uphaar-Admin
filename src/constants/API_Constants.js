const MAIN_URL = "https://uphaar-backend.vercel.app";

const API_CONSTANTS = {
  LOGIN: MAIN_URL + "/api/users/login",
  SIGNUP: MAIN_URL + "/api/users/add",

  ALL_HOSPITAL: MAIN_URL + "/api/hospital/all",
  ADD_HOSPITAL: MAIN_URL + "/api/hospital/add",
  UPDATE_HOSPITAL: MAIN_URL + "/api/hospital/add",
  DELETE_HOSP: MAIN_URL + "/api/hospital/",  

  ALL_FIRE: MAIN_URL + "/api/fire/all",
  ADD_FIRE: MAIN_URL + "/api/fire/add",
  UPDATE_FIRE: MAIN_URL + "/api/fire/add",
  DELETE_FIRE: MAIN_URL + "/api/fire/",

  ALL_POLICE: MAIN_URL + "/api/police/all",
  ADD_POLICE: MAIN_URL + "/api/police/add",
  UPDATE_POLICE : MAIN_URL + "/api/police/add",
  DELETE_POLICE : MAIN_URL + "/api/police/delete",

};

const LOCAL = {
  TOKEN: "token",
  ISLOGGED: "isLogged",
};



export default { API_CONSTANTS, LOCAL };
