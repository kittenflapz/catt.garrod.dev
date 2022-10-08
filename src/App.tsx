import React from "react";
import { Flex } from "theme-ui";
import "./App.css";
import Corn from "./Corn";
import HonkForCorn from "./HonkForCorn";

function App() {
  return (
    <Flex
      sx={{
        width: "100%",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <HonkForCorn />
      <Corn />
    </Flex>
  );
}

export default App;
