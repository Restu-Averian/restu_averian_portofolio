import { memo } from "react";
import TitleSectionStyled from "../../styled/global/TitleSection.styled";

/**
 *
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.description
 * @returns
 */
const TitleSection_ = ({ title, description }) => {
  return (
    <TitleSectionStyled>
      <h2 className="title-section">{title}</h2>
      <p className="description-section">{description}</p>
    </TitleSectionStyled>
  );
};

const TitleSection = memo(TitleSection_);
export default TitleSection;
