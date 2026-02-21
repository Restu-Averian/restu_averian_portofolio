import { memo } from "react";
import CardStyled from "../../../styled/global/card/Card.styled";
import Image from "../image";
import { Icon } from "@iconify/react";
import Button from "../Button";

const Card_ = ({ imgSrc, onClick, title, subtitle, techStacks }) => {
  return (
    <CardStyled onClick={onClick}>
      <Image
        figureAttrs={{
          className: "crd__fgr-img",
        }}
        src={imgSrc}
      />

      <h3 className="crd__title-project">{title}</h3>
      <p className="crd__desc-project">{subtitle}</p>

      <div className="crd__ftr">
        <ul className="crd__ftr-lst-tech-stack">
          {techStacks?.map((item, idx) => {
            return (
              <li key={idx}>
                <Icon icon={item?.icon} width={24} />
              </li>
            );
          })}
        </ul>

        <Button type="secondary" className="crd__ftr-btn-try-demo">
          Try Demo
        </Button>
      </div>
    </CardStyled>
  );
};

const Card = memo(Card_);
export default Card;
