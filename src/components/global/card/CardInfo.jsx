import { memo, useContext } from "react";
import { Flex } from "../Layout";
import {
  DescriptionStyled,
  TechStackStyled,
  TitleProject,
} from "../../../styled/global/Card.styled";
import Button from "../Button";
import CardCtx from "../../../context/CardCtx";

const CardInfo_ = () => {
  const { level, projectConfig } = useContext(CardCtx);
  return (
    <>
      <Flex
        alignItems="center"
        style={{
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
    </>
  );
};

const CardInfo = memo(CardInfo_);
export default CardInfo;
