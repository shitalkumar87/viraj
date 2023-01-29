import { Route, Routes } from "react-router-dom";
import Homepage from "../components/Homepage";
import Login from "../components/Login";
import Answer from "../components/Answer";
import Chat from "../components/Chat";
import Join from "../components/Join";
 
 const Allroute = () => {
   return (
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/:id" element={<Answer/>}></Route>
        <Route path="/chat" element={<Chat/>}></Route>
        <Route path="/join" element={<Join/>}></Route>
      </Routes>
   )
 }
 
 export default Allroute