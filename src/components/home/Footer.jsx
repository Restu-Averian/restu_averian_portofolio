import { memo } from "react";
import FooterStyled from "../../styled/layout/Footer.styled";
import InspiredCredits from "../footer/InspiredCredits";
import SocialMedia from "../footer/SocialMedia";

const Footer_ = () => {
  return (
    <FooterStyled>
      <SocialMedia />

      <InspiredCredits />
    </FooterStyled>
  );
};

const Footer = memo(Footer_);
export default Footer;
