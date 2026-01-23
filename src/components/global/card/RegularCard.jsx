import { memo, useContext } from "react";
import CardStyled, {
  DescriptionStyled,
  TechStackStyled,
  TitleProject,
} from "../../../styled/global/Card.styled";
import { Flex } from "../Layout";
import Button from "../Button";
import CardCtx from "../../../context/CardCtx";

const RegularCard_ = () => {
  const { onClickCard, thumbnailConfig, level, projectConfig } =
    useContext(CardCtx);

  return (
    <CardStyled
      onClick={(e) => {
        if (typeof onClickCard === "function") {
          onClickCard(e);
        }
      }}
    >
      <>
        <div>
          <figure className="bg-img">
            <img
              className="img-thumbnail-project-item"
              src={thumbnailConfig?.src}
              alt={thumbnailConfig?.alt}
            />
          </figure>

          <Flex
            alignItems="center"
            style={{
              marginTop: 24,
              padding: "0px 18px",
            }}
          >
            <TitleProject $level={level}>{projectConfig?.title}</TitleProject>

            <Button
              renderAs="button"
              icon="external-link"
              onClick={(e) => {
                e.stopPropagation();
              }}
            />
          </Flex>

          <TechStackStyled aria-label="Technologies used">
            <li>React</li>
            <li>Ant Design</li>
          </TechStackStyled>

          <DescriptionStyled>{projectConfig?.description}</DescriptionStyled>
        </div>

        <Button
          className="btn-view-project"
          aria-label="View case study for SaaS Dashboard"
          style={{
            width: "100%",
          }}
        >
          Try It
        </Button>
      </>
    </CardStyled>
  );
};

const RegularCard = memo(RegularCard_);
export default RegularCard;
