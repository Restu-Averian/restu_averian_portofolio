import { memo } from "react";
import useBreakpoint from "../../../hooks/useBreakpoint";
import { Flex } from "../../global/Layout";
import Icons from "../../global/Icons";

const Footprint_ = () => {
  const { xs } = useBreakpoint();

  if (xs) {
    return (
      <Icons
        type="cat-foot-print-v2"
        style={{
          transform: "rotate(-128deg)",
          color: "#E8DCC4",
          position: "absolute",
          top: 50,
          right: 24,
          width: 32,
        }}
      />
    );
  }
  return (
    <>
      <Flex
        style={{
          position: "absolute",
          top: 210,
          left: 48,
        }}
      >
        <Icons
          type="cat-foot-print-v2"
          style={{
            transform: "rotate(90deg)",
            color: "#E8DCC4",
          }}
        />
        <Icons
          type="cat-foot-print-v2"
          style={{
            transform: "rotate(-12deg)",
            marginTop: 36,
            color: "#E8DCC4",
          }}
        />
      </Flex>

      <Flex
        style={{
          position: "absolute",
          top: 82,
          right: 120,
        }}
        gap={24}
      >
        <Icons
          type="cat-foot-print-v2"
          style={{
            transform: "rotate(10deg)",
            marginTop: 24,
            color: "#E8DCC4",
          }}
        />
        <Icons
          type="cat-foot-print-v2"
          style={{
            transform: "rotate(-90deg)",
            color: "#E8DCC4",
          }}
        />
      </Flex>
    </>
  );
};

const Footprint = memo(Footprint_);
export default Footprint;
