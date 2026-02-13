import { memo } from "react";
import Icons from "./Icons";
import SuspenseLoadingStyled from "../../styled/global/SuspenseLoading.styled";

const SuspenseLoading_ = ({ text = "Loading" }) => {
  return (
    <SuspenseLoadingStyled>
      <Icons
        type="sleepy-cat"
        style={{
          width: 120,
          color: "",
        }}
      />

      <p className="loading">{text}</p>
    </SuspenseLoadingStyled>
  );
};

const SuspenseLoading = memo(SuspenseLoading_);
export default SuspenseLoading;
