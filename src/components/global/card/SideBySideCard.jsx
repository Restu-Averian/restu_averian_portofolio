import { memo, useContext } from "react";
import { Flex } from "../Layout";
import CardCtx from "../../../context/CardCtx";
import CardInfo from "./CardInfo";

const SideBySideCard_ = () => {
  const { thumbnailConfig } = useContext(CardCtx);
  return (
    <Flex justifyContent="space-between" alignItems="flex-start">
      <Flex
        gap={4}
        flexDirection="column"
        style={{
          width: "calc(100% - 360px)",
        }}
      >
        <CardInfo />
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
