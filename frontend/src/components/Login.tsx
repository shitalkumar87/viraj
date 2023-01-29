import React, { useEffect, useReducer } from "react";
import {
  Input,
  Box,
  Image,
  Flex,
  Text,
  useToast
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import "./Login.css";
import { Userlogin } from "../redux/Authlogin/action";

import { useState } from "react";
import { Spinner } from '@chakra-ui/react'

import {saveLocalData,getLocalData } from "../Utils/LocalStorage";

 




const Login = () => {
  const [login,SetLogin]=useState({})
  const dispatch:any = useDispatch()
  const navigate = useNavigate()
  const toast=useToast()
 
   const {isAuth,isError,isLoading} =useSelector((store:any)=>store.loginAuth)
   const  store=useSelector((store:any)=>store.loginAuth)
    console.log(store)
    

   
    const handleChange=(e:any)=>{
      const {name,value}=e.target
      SetLogin({
       ...login,
       [name]:value
      })
   }



 const handleSubmit=(e:any)=>{
  e.preventDefault()
   dispatch(Userlogin(login))
 }
 useEffect(()=>{
  if(isAuth){
    toast({
      title: "Success",
      description: "Welcome To The Answer Dashboard",
      status: "success",
      duration: 2000,
      position: "top",
      isClosable: true,
    });

    navigate("/")
  }
  if(isError){
   toast({
     title: "Something Went Wrong ",
     description: "Enter correct Email and Password",
     status: "error",
     duration: 2000,
     position: "top",
     isClosable: true,
   });
  }
},[isAuth,isError])
  
  

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
            <Input type="email" name="email" variant={"unstyled"} border={"0.5px solid #8d8d8d"}   onChange={handleChange} required />
            <label>Password</label>
            <Input type="password" name="password" variant={"unstyled"} border={"0.5px solid #8d8d8d"}   onChange={handleChange} required />
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
