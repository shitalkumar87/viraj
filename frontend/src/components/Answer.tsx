import "./Answer.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Textarea,
} from "@chakra-ui/react";

const Answer = () => {
  const ans_arr = ["first", "Second", "Third"];
  const { isOpen, onOpen, onClose } = useDisclosure();

  const deleteQuestion=()=>{
    console.log("delete this question")
  }

  const deleteAnswer=()=>{
    console.log("delete this Answer")
  }

  const addAnswer=()=>{
    onClose()
    console.log("Added this Answer")
  }

  return (
    <div className="results">
      <div className="res_ans">
        <p>All Results</p>
        <button onClick={onOpen}>Add Answer</button>
      </div>
      <div className="each_ele">Question:</div>
      <button onClick={deleteQuestion}>Delete Question</button>
      {ans_arr?.map((ele,ind) => {
        return (
          <div>
            <div className="each_ele">{`${ind+1}) ${ele}`}</div>
            <button onClick={deleteAnswer}>Delete Answer</button>
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
