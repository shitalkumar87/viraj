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
  const {id}=useParams()
  console.log(id)
  const toast=useToast()
  const navigate=useNavigate()
  const token=localStorage.getItem("usertoken")
  const { isOpen, onOpen, onClose } = useDisclosure();

  const getQ = (id:any) => {
    axios
      .get(`http://localhost:8080/question/${id}`)
      .then((res) => setqArr(res.data.data[0]));
          
  };
   
  console.log(qArr)
  const deleteQuestion=()=>{
     fetch(`http://localhost:8080/question/delete/${id}`,{
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
    console.log("delete this Answer")
  }

  const addAnswer=()=>{
    onClose()
    console.log("Added this Answer")
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
          <div>
            <div className="each_ele" key="sk">{`${ind+1}) ${ele}`}</div>
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
          <Textarea w={"90%"} m={"20px"} isInvalid placeholder='Text Here' />

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
