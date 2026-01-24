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
    <Flex justifyContent="space-between" alignItems="flex-start">
      <Flex
        gap={4}
        flexDirection="column"
        style={{
          width: "calc(100% - 360px)",
        }}
      >
        <Flex
          alignItems="center"
          style={{
            marginTop: 24,
            padding: "0px 18px",
          }}
        >
          <TitleProject $level={level}>{projectConfig?.title}</TitleProject>

          <Button
            variant="text"
            renderAs="button"
            icon="external-link"
            onClick={(e) => {
              e.stopPropagation();
            }}
            size="small"
          />
        </Flex>

        <TechStackStyled aria-label="Technologies used">
          <li>React</li>
          <li>Ant Design</li>
        </TechStackStyled>

        <DescriptionStyled>{projectConfig?.description}</DescriptionStyled>
      </Flex>

      <figure className="bg-img side-by-side">
        <img
          className="img-thumbnail-project-item"
          src={thumbnailConfig?.src}
          alt={thumbnailConfig?.alt}
        />
      </figure>
    </Flex>
  );
};

const SideBySideCard = memo(SideBySideCard_);
export default SideBySideCard;
