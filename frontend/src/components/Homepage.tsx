import { Box, Button, Textarea, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";
import "./Homepage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const [value, setValue] = useState("");
  const [qArr, setqArr] = useState<any>([]);
  const toast = useToast();
  const navigate = useNavigate();

  const getQ = () => {
    axios
      .get("http://localhost:8080/question")
      .then((res) => setqArr(res.data));
  };

  let handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };
  const submitQ = () => {
    //Post Data
    fetch(`http://localhost:8080/question/create`, {
      method: "POST",
      body: JSON.stringify({ question: value }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    toast({
      title: "Question Submitted.",
      description: "Your question will be answered by a teacher within 24 Hrs.",
      duration: 5000,
      isClosable: true,
    });

    console.log("Submitted");
    getQ();
  };
  console.log(qArr);
  const toAnswer = (id: any) => {
    navigate(`/${id}`);
  };
  useEffect(() => {
    getQ();
  }, []);
  return (
    <Box className="main">
      <Heading
        size={{ base: "sm", sm: "md", md: "lg", lg: "xl", xl: "2xl" }}
        color="#444ec2"
      >
        Welcome to Speedy Answers !
      </Heading>
      <Heading
        size={{ base: "xs", md: "sm", lg: "md", xl: "lg" }}
        color="#44c278"
        mt="2%"
      >
        Ask your question below to get an answer from our Teachers{" "}
      </Heading>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems="center"
        mt={"5%"}
      >
        <Textarea
          value={value}
          typeof="text"
          onChange={handleInputChange}
          placeholder="Enter your question here..."
          size={{ base: "xs", md: "sm", lg: "md", xl: "lg" }}
          className="inputArea"
          border={"1px solid #44c278"}
        />
        <Button
          onClick={submitQ}
          ml="4%"
          backgroundColor={"#444ec2"}
          color="whiteAlpha.800"
          _hover={{ bg: "#94e3b5" }}
        >
          Submit Question
        </Button>
      </Box>
      <Box className="questions" display={"flex"} flexDirection="column">
        {qArr.data?.map((el: any) => (
          <Box
            key={el._id}
            display="flex"
            justifyContent={"space-between"}
            pl="5%"
            pr="5%"
            mt="5px"
          >
            <Text
              color={"#444EC2"}
              fontWeight="Bold"
              fontSize={{ base: "xs", md: "sm", lg: "md", xl: "lg" }}
              mr="2%"
            >
              {el.question}
            </Text>
            <Button
              backgroundColor={"#44C278"}
              color="whiteAlpha.800"
              _hover={{ bg: "#94e3b5" }}
              onClick={() => toAnswer(el._id)}
            >
              Go to Answers
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Homepage;
