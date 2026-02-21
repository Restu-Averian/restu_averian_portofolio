import { forwardRef, memo, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import useBreakpoint from "../../../hooks/useBreakpoint";
import { getRandNum, onScrollTarget } from "../../../helpers";
import SelectedWorksFootprint from "./SelectedWorksFootprint";
import {
  SelectedWorksDesktopStyled,
  SelectedWorksMobileStyled,
} from "../../../styled/home/SelectedWorks.styled";
import Icons from "../../global/Icons";
import { Flex } from "../../global/Layout";
import Card from "../../global/Card";
import CardSP from "../../global/card/CardSP";
import SelectedWorksContentMobile from "./SelectedWorksContentMobile";
import SelectedWorksContentDesktop from "./SelectedWorksContentDesktop";

const SelectedWorks_ = ({ techStackRef }, ref) => {
  const navigate = useNavigate();

  const { xs } = useBreakpoint();

  const onClickTechEverUsed = () => {
    if (techStackRef?.current) {
      onScrollTarget(techStackRef?.current);
    }
  };

  const TRANSFORM_CARD = {
    1: {
      rotate: -10,
      x: -50,
      y: 20,
    },
    2: {
      rotate: -18,
      x: -5,
      y: 36,
    },
    3: {
      rotate: 10,
      x: 50,
      y: 0,
    },
  };

  const WrapperStyled = useMemo(
    () => (xs ? SelectedWorksMobileStyled : SelectedWorksDesktopStyled),
    [xs],
  );

  return (
    <WrapperStyled ref={ref}>
      {xs ? <SelectedWorksContentMobile /> : <SelectedWorksContentDesktop />}
    </WrapperStyled>
  );
};

const SelectedWorks = memo(forwardRef(SelectedWorks_));
export default SelectedWorks;
