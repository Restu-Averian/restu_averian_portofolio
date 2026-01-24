import { memo, useContext } from "react";
import CardCtx from "../../../context/CardCtx";
import CardInfo from "./CardInfo";

const RegularCard_ = () => {
  const { thumbnailConfig } = useContext(CardCtx);

  return (
    <>
      <div className="content">
        <figure className="bg-img">
          <img
            className="img-thumbnail-project-item"
            src={thumbnailConfig?.src}
            alt={thumbnailConfig?.alt}
          />
        </figure>

        <CardInfo />
      </div>

      {/* <Button
        className="btn-view-project"
        aria-label="View case study for SaaS Dashboard"
        style={{
          width: "100%",
        }}
      >
        Try It
      </Button> */}
    </>
  );
};

const RegularCard = memo(RegularCard_);
export default RegularCard;
