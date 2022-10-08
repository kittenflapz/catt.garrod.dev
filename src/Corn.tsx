import React, { ReactElement } from "react";
import { keyframes } from "@emotion/react";
import { Flex } from "theme-ui";

export default function Corn(): ReactElement {
  const cornimation = (randomY: number) => keyframes`
    0% {
        top: 110%;
        left: 50%;
    }
    50% {
        top: 0%;
        left: ${randomY / 2}%;
        transform: rotate( 360deg );
    }
    100% { transform: rotate( 0deg ); }
    `;

  return (
    <Flex
      sx={{
        width: "100px",
        height: "100px",
        animation: `${cornimation} 10s forwards`,
      }}
    >
      {" "}
      🌽{" "}
    </Flex>
  );
}
