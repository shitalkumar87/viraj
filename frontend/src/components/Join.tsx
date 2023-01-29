import { Box, Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <Box className="joinOuterContainer">
      <Box className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <Box mt={"10px"}>
          <Input
            placeholder="Name"
            className="joinInput"
            type="text"
            color={"white"}
            onChange={(event) => setName(event.target.value)}
          />
        </Box>
        <Box>
          <Input
            placeholder="Room"
            className="joinInput"
            type="text"
            color={"white"}
            onChange={(event) => setRoom(event.target.value)}
            mt="5px"
          />
        </Box>
        {/* //Pass data as a url */}
        <Link
          onClick={(e) => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <Button
            className={"button"}
            mt="20px"
            backgroundColor={"#444ec2"}
            color="whiteAlpha.800"
            _hover={{ bg: "#94e3b5" }}
            type="submit"
          >
            Sign In
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Join;
