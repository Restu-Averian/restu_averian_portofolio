import { memo } from "react";
import CardSPStyled from "../../../styled/global/card/CardSP.styled";
import Button from "../Button";
import Image from "../image";

/**
 *
 * @param {object} props
 * @param {string} props.imgSrc
 * @param {string} props.title
 * @param {string} props.subtitle
 * @param {import("react").CSSProperties} props.style
 * @param {string} [props.className]
 * @param {import("react").ReactNode} [props.extraBtn]
 * @returns
 */
const CardSP_ = ({
  imgSrc,
  title,
  subtitle,
  style,
  className = "",
  extraBtn,
}) => {
  return (
    <CardSPStyled $style={style} className={className}>
      <Image
        figureAttrs={{
          className: "crdsp__fgr-img",
        }}
        src={imgSrc}
      />

      <div className="crdsp__info-project">
        <h3 className="crdsp__info-project-title">{title}</h3>
        <p className="crdsp__info-project-subtitle">{subtitle}</p>

        <div className="crdsp__info-project-btns">
          <Button
            type="secondary"
            className="crdsp__info-project-btns-demo"
            onClick={(e) => {
              e?.stopPropagation();
            }}
          >
            Try Demo
          </Button>

          {typeof extraBtn !== "undefined" && extraBtn}
        </div>
      </div>
    </CardSPStyled>
  );
};

const CardSP = memo(CardSP_);
export default CardSP;
