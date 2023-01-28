import React, { useReducer } from "react";
import {
  Input,
  Box,
  Image,
  Flex,
  Text
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import "./Login.css";
import { getLogin } from "../redux/action";

import { useState } from "react";
import { Spinner } from '@chakra-ui/react'

import {saveLocalData,getLocalData } from "../Utils/LocalStorage";

const initialState = {
  Email: "",
  Pass: ""
}

const reducer = (state:any, action:any) => {
  switch (action.type) {
    
    case "Email": return { ...state, Email: action.payload }

    case "Pass": return { ...state, Pass: action.payload }

    default: return state
  }
}




const Login = () => {
  const dispatchtwo = useDispatch()
  const navigate = useNavigate()
  const [dummy, setDummy] = useState(false);
  const [dummy1, setDummy1] = useState(false);
 
  const { alldata, isLoading, isError } = useSelector((state:any) => {
    return {
      alldata: state.alldata,
      isLoading: state.isLoading,
      isError: state.isError
    }
  });
  const [state, dispatch] = useReducer(reducer, initialState)

  let {Email, Pass } = state;

  const handleChange = (e:any) => {
    let { name, value } = e.target;
    dispatch({ type: name, payload: value })
  }



 const handleSubmit=(e:any)=>{

 }

  
  // console.log(isLoading)

  const nameLocal = getLocalData("name") || ""

  return (
    <div>
      <Box>
      <Flex className="flexLogin">
        <Box className="boxLogin">
          <form className="formLogin" onSubmit={handleSubmit}>
            {
              nameLocal ? <Text mb={"20px"} fontSize={"18px"} color={"green"}>You are login, keep explore</Text> : null
            }
            <Text className="textLogin">Login form</Text>
            <label> Email</label>
            <Input type="email" name="Email" variant={"unstyled"} border={"0.5px solid #8d8d8d"} value={Email} onChange={handleChange} required />
            <label>Password</label>
            <Input type="password" name="Pass" variant={"unstyled"} border={"0.5px solid #8d8d8d"} value={Pass} onChange={handleChange} required />
            {
              isLoading ? <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
              /> : null
            }
            <Flex gap={"10px"} justifyContent={"center"}>
              <Box>Doesnot have an acount ?</Box>
              <Link to={"/signup"}><Box color={"red"} fontWeight={"bold"}>Sign up</Box></Link>
            </Flex>
            <input className="buttonLogin" type="submit" value="Submit" />
          </form>
        </Box>
        <Box marginTop={["15px","25px","55px"]}>
          <Image className="imageLogin" src="https://www.photodoto.com/wp-content/uploads/2012/12/2-photography-books-for-beginners.jpg" />
        </Box>
      </Flex>
    </Box>
    </div>
  )
}

export default Login
