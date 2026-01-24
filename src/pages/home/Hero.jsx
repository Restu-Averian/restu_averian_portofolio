import { memo } from "react";
import Button from "../../components/global/Button";
import { Flex } from "../../components/global/Layout";

const Hero_ = () => {
  return (
    <Flex flexDirection="column" justifyContent="center" gap={42}>
      <Flex flexDirection="column" justifyContent="center" gap={8}>
        <Flex
          justifyContent="center"
          flexDirection="column"
          gap={0}
          style={{
            textAlign: "center",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontFamily: `"Playfair Display", serif`,
              fontWeight: "normal",
              fontSize: 63,
              color: "rgba(var(--primary-color-code))",
            }}
          >
            Building
          </h1>
          <h1
            style={{
              margin: 0,
              fontFamily: `"Playfair Display", serif`,
              fontStyle: "italic",
              fontWeight: "normal",
              fontSize: 63,
              color: "#7C3AED",
            }}
          >
            High Performance
          </h1>
          <h1
            style={{
              margin: 0,
              fontFamily: `"Poppins", serif`,
              fontWeight: "bold",
              fontSize: 56,
            }}
          >
            FRONTEND INTERFACES
          </h1>
        </Flex>
        <p
          style={{
            textAlign: "center",
            color: "rgba(76,29,149, 0.8)",
            fontSize: 18,
            fontFamily: `"Inter", sans-serif`,
            margin: "0 auto",
            fontWeight: "normal",
            width: 320,
          }}
        >
          Hi, I'm Restu Averian. Focused on React, Optimization, and scalable UI
        </p>
      </Flex>

      <Button
        variant="outline"
        size="medium"
        style={{
          margin: "auto",
          fontWeight: "normal",
        }}
        icon="arrow-down"
      >
        EXPLORE WORK
      </Button>
    </Flex>
  );
};

const Hero = memo(Hero_);
export default Hero;
