import { memo } from "react";
import useBreakpoint from "../../../hooks/useBreakpoint";
import { Flex } from "../../global/Layout";
import Icons from "../../global/Icons";

const SelectedWorksFootprint_ = () => {
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
      <Flex className="hm__sw-cat-footprint-1">
        <Icons
          className="hm__sw-cat-footprint-1-item-1"
          type="cat-foot-print-v2"
        />
        <Icons
          className="hm__sw-cat-footprint-1-item-2"
          type="cat-foot-print-v2"
        />
      </Flex>

      <Flex className="hm__sw-cat-footprint-2">
        <Icons
          type="cat-foot-print-v2"
          className="hm__sw-cat-footprint-2-item-1"
        />
        <Icons
          type="cat-foot-print-v2"
          className="hm__sw-cat-footprint-2-item-2"
        />
      </Flex>
    </>
  );
};

const SelectedWorksFootprint = memo(SelectedWorksFootprint_);
export default SelectedWorksFootprint;
