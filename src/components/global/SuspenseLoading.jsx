import { memo } from "react";
import Icons from "./Icons";
import SuspenseLoadingStyled from "../../styled/global/SuspenseLoading.styled";
import useBreakpoint from "../../hooks/useBreakpoint";

const SuspenseLoading_ = ({ text = "Loading" }) => {
  const { xs } = useBreakpoint();

  return (
    <SuspenseLoadingStyled>
      <Icons
        type="sleepy-cat"
        style={{
          width: xs ? 100 : 120,
          color: "#839496",
        }}
      />

      <p className="loading">{text}</p>
    </SuspenseLoadingStyled>
  );
};

const SuspenseLoading = memo(SuspenseLoading_);
export default SuspenseLoading;
