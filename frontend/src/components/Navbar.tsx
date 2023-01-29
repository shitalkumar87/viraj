import { Button } from "@chakra-ui/react";
import axios from "axios";
import { useEffect ,useState,useCallback} from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
const token=localStorage.getItem("usertoken");
const Navbar = () => {
  const navigate=useNavigate()
  const {isAuth,isError,isLoading} =useSelector((store:any)=>store.loginAuth)
   
  const [qArr, setqArr] = useState<any>([]);
  const [state,Setstate]=useState(true)
  const getQ = () => {
    axios
      .get("https://lazy-tan-cygnet-gown.cyclic.app/question")
      .then((res) => setqArr(res.data));
      
  };

  //  console.log(qArr)

  const handleLogout=()=>{
    localStorage.clear()
    window.location.reload()
  }

  const handleLogin=()=>{
    navigate("/login")
    window.location.reload()
  }
  useEffect(()=>{
      getQ()
      // window.location.reload()
     
      // if(state){
      //   Setstate(false)
      // }
      // else{
      //   Setstate(true)
      // }
  },[token])
  return (
    <div className="main_head">
      <div className="img_box">
        <Link to="/">
          <img src="https://i.ibb.co/HhRWBzh/Learning.jpg" alt="site logo" />
        </Link>
      </div>
      <div className="login_box">
        <b>Total questions: {qArr.data && qArr.data.length}</b>
        <b>
          {isAuth?<Button onClick={handleLogout}>Logout</Button>:<Button onClick={handleLogin}>Login</Button>}
        </b>
      </div>
    </div>
  );
};

export default Navbar;
