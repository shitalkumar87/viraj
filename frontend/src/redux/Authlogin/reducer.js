import * as types from "./actiontypes"

const token = localStorage.getItem("usertoken");
const initialState = {
    isAuth: false,
    token: "",
    isLoading: false,
    isError: false,
    // user: JSON.parse(localStorage.getItem("user"))|| {}
}

export const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        

        case types.LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false,
                isAuth: false,
            }

        case types.LOGIN_SUCCESS:
            localStorage.setItem('usertoken',payload.token)
            
            console.log(payload)
            return {
                ...state,
                isLoading: false,
                isError: false,
               token:payload.token,
               isAuth: true
            }

        case types.LOGIN_FAILURE:
            return {
                ...state,
                isAuth: false,
                isLoading: false,
                isError: true,
                
            }


        default:
            return state
    }
}