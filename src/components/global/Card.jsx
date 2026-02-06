import { memo } from "react";
// import FallbackProjectThumbnail from "../../assets/fallback-project-thumbnail.webp";
import FallbackProjectThumbnail from "../../assets/fallback-project-thumbnail.webp";
import Button from "./Button";
import CardStyled from "../../styled/global/Card.styled";

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
}) => {
  return (
    <CardStyled
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
      </div>

      <div className="wrapper-btn-demo">
        <Button
          className="btn-demo"
          styleContainer={{
            transform: `rotate(${rotateBtn}deg)`,
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
