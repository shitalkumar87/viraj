import { Route, Routes } from "react-router-dom";
import Homepage from "../components/Homepage";
import Login from "../components/Login";
import Answer from "../components/Answer";
 
 const Allroute = () => {
   return (
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/:id" element={<Answer/>}></Route>
      </Routes>
   )
 }
 
 export default Allroute