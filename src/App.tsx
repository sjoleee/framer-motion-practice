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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #88c4db;
  margin: 0 10px;
`;

const boxVariants = {
  start: { opacity: 0, scale: 0.5 },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      delay: 0.5,
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const circleVariants = {
  start: { opacity: 0, y: 10 },
  end: { opacity: 1, y: 0, transition: { type: "spring" } },
};

function App() {
  return (
    <Wrapper>
      <Box variants={boxVariants} initial="start" animate="end">
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
      </Box>
    </Wrapper>
  );
}

export default App;
