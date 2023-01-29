// import * as types from "../actiontypes"
// import axios from "axios";




// export const getLogin = (data) => async(dispatch) => {
//     dispatch({ type: types.LOGIN_REQUEST })
//          let res=await axios.post("http://localhost:8080/login", data)
//         .then((res) => {
//             console.log(res)
//             dispatch({ type: types.LOGIN_SUCCESS, payload: res.data })
//         }).catch((err) => {
//             dispatch({ type: types.LOGIN_FAILURE })
//         })
// }


import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actiontypes";
 
// const Url = "https://dailybackend.onrender.com";

export const Userlogin = (creds) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    let res = await axios.post(`https://lazy-tan-cygnet-gown.cyclic.app/teacher/login`, creds);
      console.log(res)
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
     
  } catch (err) {
    dispatch({ type: LOGIN_FAILURE });
  }
};