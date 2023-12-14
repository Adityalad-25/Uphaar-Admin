const MAIN_URL = "https://uphaar-backend.vercel.app";

const API_CONSTANTS = {
  LOGIN: MAIN_URL + "/api/users/login",
  SIGNUP: MAIN_URL + "/api/users/add",
  ALL_HOSPITAL: MAIN_URL + "/api/hospital/all",
  ADD_HOSPITAL: MAIN_URL + "/api/hospital/add",
  UPDATE_HOSPITAL: MAIN_URL + "/api/hospital/add",
  DELETE_HOSP: MAIN_URL + "/api/hospital/"
};

const LOCAL = {
  TOKEN: "token",
  ISLOGGED: "isLogged",
};



export default { API_CONSTANTS, LOCAL };
