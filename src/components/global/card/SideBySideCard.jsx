import { memo, useContext } from "react";
import { Flex, SBGCol, SBGRow } from "../Layout";
import {
  DescriptionStyled,
  TechStackStyled,
  TitleProject,
} from "../../../styled/global/Card.styled";
import Button from "../Button";
import CardCtx from "../../../context/CardCtx";

const SideBySideCard_ = () => {
  const { projectConfig, thumbnailConfig, level } = useContext(CardCtx);
  return (
    <SBGRow>
      <SBGCol col lg={5}>
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
      </SBGCol>
      <SBGCol col lg={6}>
        <figure className="bg-img side-by-side">
          <img
            className="img-thumbnail-project-item"
            src={thumbnailConfig?.src}
            alt={thumbnailConfig?.alt}
          />
        </figure>
      </SBGCol>
    </SBGRow>
  );
};

const SideBySideCard = memo(SideBySideCard_);
export default SideBySideCard;
