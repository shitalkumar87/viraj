import { Box, Button, Textarea, Heading } from "@chakra-ui/react";
import React from "react";
import { useToast } from "@chakra-ui/react";
import "./Homepage.css";

const Homepage = () => {
  const [value, setValue] = React.useState("");
  const toast = useToast();

  let handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };
  const submitQ = () => {
    //Post Data
    toast({
      title: "Question Submitted.",
      description: "Your question wil be answered by a teacher within 24 Hrs.",
      duration: 5000,
      isClosable: true,
    });

    console.log("Submitted");
  };
  console.log(value);
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
    </Box>
  );
};

export default Homepage;
