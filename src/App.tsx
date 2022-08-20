import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Box = styled.div`
  background-color: white;
  width: 200px;
  height: 200px;
  border-radius: 10px;
`;

function App() {
  return (
    <Wrapper>
      <Box></Box>
    </Wrapper>
  );
}

export default App;
