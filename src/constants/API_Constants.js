const MAIN_URL = "https://uphaar-backend.vercel.app";

const API_CONSTANTS = {
  LOGIN: MAIN_URL + "/api/users/login",
  SIGNUP: MAIN_URL + "/api/users/add",
  ALL_HOSPITAL: MAIN_URL + "/api/hospital/all",
  ADD_HOSPITAL: MAIN_URL + "/api/hospital/add",
  UPDATE_HOSPITAL: MAIN_URL + "/api/hospital/add",
  DELETE_HOSP: MAIN_URL + "/api/hospital/",
  ADD_FIRESTATION:MAIN_URL+"/api/firestation/add",
  ALL_FIRESTATION:MAIN_URL+"/api/firestation",
  UPDATE_FIRESTATION:MAIN_URL+"/api/firestation/add",
  DEVICE_COUNT:MAIN_URL+"/api/get"
};

const LOCAL = {
  TOKEN: "token",
  ISLOGGED: "isLogged",
};



export default { API_CONSTANTS, LOCAL };
