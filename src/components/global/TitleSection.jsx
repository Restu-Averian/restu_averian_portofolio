import { memo, useMemo } from "react";
import TitleSectionStyled from "../../styled/global/TitleSection.styled";

/**
 *
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.description
 * @param {"small" | "medium" | "large"} props.size
 * @param {import("react").CSSProperties} props.style
 * @param {import("react").CSSProperties} props.titleStyle
 * @param {import("react").CSSProperties} props.descriptionStyle
 * @returns
 */
const TitleSection_ = ({
  title,
  description,
  size = "large",
  style,
  titleStyle,
  descriptionStyle,
}) => {
  const { titleSize, descriptionSize } = useMemo(() => {
    let titleSize = 48;

    switch (size) {
      case "small":
        titleSize = 16;
        break;
      case "medium":
        titleSize = 32;
        break;
      default:
        titleSize = 48;
        break;
    }
    return {
      titleSize,
      descriptionSize: titleSize / 2,
    };
  }, [size]);
  return (
    <TitleSectionStyled
      $titleSize={titleSize}
      $descriptionSize={descriptionSize}
      $style={style}
      $titleStyle={titleStyle}
      $descriptionStyle={descriptionStyle}
    >
      <h2 className="title-section">{title}</h2>
      <p className="description-section">{description}</p>
    </TitleSectionStyled>
  );
};

const TitleSection = memo(TitleSection_);
export default TitleSection;
