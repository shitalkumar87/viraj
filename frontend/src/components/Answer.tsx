import {useEffect,useState} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./Answer.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  Button,
  useDisclosure,
  Textarea,
  Toast,
  useToast,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Answer = () => {
  const [qArr, setqArr] = useState<any>("");
  const [state,Setstate]=useState<any>("")
  const {id}=useParams()
  // console.log(id)
  const toast=useToast()
  const navigate=useNavigate()
  const token=localStorage.getItem("usertoken")
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getQ = (id:any) => {
    axios
      .get(`https://lazy-tan-cygnet-gown.cyclic.app/question/${id}`)
      .then((res) => setqArr(res.data.data[0]));
          
  };
  //  console.log(state)
  // console.log(qArr)
  const deleteQuestion=()=>{
     fetch(`https://lazy-tan-cygnet-gown.cyclic.app/question/delete/${id}`,{
      method:"DELETE",
       
      headers: {
        "Content-Type": "application/json",
      }
     } )

     toast({
      title: "Success",
      description: "Question Deleted successfully",
      status: "success",
      duration: 2000,
      position: "top",
      isClosable: true,
    });

    navigate("/")

  }

  const deleteAnswer=()=>{
    fetch(`https://lazy-tan-cygnet-gown.cyclic.app/question/ansdelete/${id}`,{
      body:JSON.stringify({answer:[]}),
      method:"PATCH",
       
      headers: {
        "Content-Type": "application/json",
      }
     } )

     toast({
      title: "Success",
      description: "Answer Deleted successfully",
      status: "success",
      duration: 2000,
      position: "top",
      isClosable: true,
    });
    getQ(id)
    
  }
  // console.log(state)
  const addAnswer=()=>{
    fetch(`https://lazy-tan-cygnet-gown.cyclic.app/question/edit/${id}`,{
      body:JSON.stringify({answer:state}),
      method:"PATCH",
       
      headers: {
        "Content-Type": "application/json",
      }
     } ).then((res)=>res.json()).then((res)=>console.log(res))
     

    onClose()
    getQ(id)
    toast({
      title: "Success",
      description: "Answer Added successfully",
      status: "success",
      duration: 2000,
      position: "top",
      isClosable: true,
    });
     
   
  }

  useEffect(()=>{
    getQ(id)
  },[])

  return (
    <div className="results">
      <div className="res_ans">
        <p>All Results</p>
         {token&& <button onClick={onOpen}>Add Answer</button>}
      </div>
      <div className="each_ele">Question:{qArr.question}</div>
       {token && <Button variant={"outline"} colorScheme="teal" onClick={deleteQuestion}>Delete Question</Button>}
      {qArr.answer==undefined||0?<h1>Answer Not Available</h1>:qArr.answer?.map((ele:any,ind:any) => {
        return (
          <div key={ind}>
            <div className="each_ele"  >{`${ind+1}) ${ele}`}</div>
             {token &&<Button colorScheme="red" onClick={deleteAnswer}>Delete Answer</Button>}
          </div>
        );
      })}
      

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Your Answer Here</ModalHeader>
          <ModalCloseButton />
          {/* <ModalBody>Vikas</ModalBody> */}
          <Textarea w={"90%"} m={"20px"} isInvalid placeholder='Text Here'  onChange={(e)=>Setstate(e.target.value)}/>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button  colorScheme="green" onClick={addAnswer}>Add</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Answer;
