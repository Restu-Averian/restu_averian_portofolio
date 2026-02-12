import { memo } from "react";
import FallbackProjectThumbnail from "../../assets/fallback-project-thumbnail.webp";
import Button from "./Button";
import CardStyled from "../../styled/global/Card.styled";
import useBreakpoint from "../../hooks/useBreakpoint";
import Icons from "./Icons";

const Card_ = ({
  title,
  subtitle,
  configCard = {
    rotate: 0,
    translateX: 0,
    translateY: 0,
  },
  rotateBtn = 0,
  width,
  onClick,
  className,
}) => {
  const { xs } = useBreakpoint();
  return (
    <CardStyled
      className={className}
      onClick={onClick}
      $width={width}
      $rotate={configCard?.rotate}
      $translateX={configCard?.translateX}
      $translateY={configCard?.translateY}
    >
      <figure className="thumbnail">
        <img src={FallbackProjectThumbnail} />
      </figure>

      <div className="info-project">
        <h3 className="title-project">{title}</h3>
        <p className="subtitle">{subtitle}</p>

        <Button
          type="primary"
          className="btn-demo"
          containerAttrs={{
            className: "wrapper-btn-demo",
            style: {
              transform: `rotate(${rotateBtn}deg)`,
              ...(xs && {
                padding: 8,
              }),
            },
          }}
          onClick={(e) => {
            e?.stopPropagation();
          }}
        >
          Try Demo
        </Button>
      </div>
    </CardStyled>
  );
};

const Card = memo(Card_);
export default Card;
