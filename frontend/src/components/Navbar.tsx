import { Button } from "@chakra-ui/react";
import axios from "axios";
import { useEffect ,useState} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const token=localStorage.getItem("usertoken");
const Navbar = () => {
  const [qArr, setqArr] = useState<any>([]);
  const getQ = () => {
    axios
      .get("http://localhost:8080/question")
      .then((res) => setqArr(res.data));
      
  };
   console.log(qArr)
  const handleLogout=()=>{
    localStorage.clear()
  }
  useEffect(()=>{
      getQ()
  },[])
  return (
    <div className="main_head">
      <div className="img_box">
        <Link to="/">
          <img src="https://i.ibb.co/HhRWBzh/Learning.jpg" alt="site logo" />
        </Link>
      </div>
      <div className="login_box">
        <b>Total questions: {qArr.data.length}</b>
        <b>
          {token?<Button onClick={handleLogout}>Logout</Button>:<Link to="/login">Login</Link>}
        </b>
      </div>
    </div>
  );
};

export default Navbar;
