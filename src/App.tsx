import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Box = styled(motion.div)`
  background-color: white;
  width: 200px;
  height: 200px;
  border-radius: 10px;
`;

function App() {
  return (
    <Wrapper>
      <Box
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotateZ: 360 }}
        transition={{ type: "spring", bounce: 0.5, duration: 1, delay: 0.5 }}
      />
    </Wrapper>
  );
}

export default App;
