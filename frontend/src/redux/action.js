import * as types from "./actiontypes"
import axios from "axios";




export const getLogin = (data) => (dispatch) => {
    dispatch({ type: types.LOGIN_REQUEST })
    return axios.post("http://localhost:4500/login", data)
        .then((res) => {
            console.log(res)
            dispatch({ type: types.LOGIN_SUCCESS, payload: res.data })
        }).catch((err) => {
            dispatch({ type: types.LOGIN_FAILURE })
        })
}