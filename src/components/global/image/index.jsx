import { memo, useState } from "react";
import { FALLBACK_SRC_IMAGE } from "../../../constants";
import useBreakpoint from "../../../hooks/useBreakpoint";
import ImageStyled from "../../../styled/global/Image.styled";
import ImageLoading from "./ImageLoading";

const Image_ = ({ src, figureAttrs = {}, ...props }) => {
  const { xs } = useBreakpoint();

  const [imgSrc, setImgSrc] = useState(src);
  const [isLoaded, setLoaded] = useState(false);

  return (
    <ImageStyled
      style={{
        ...(xs &&
          isLoaded === false && {
            height: 100,
          }),
      }}
    >
      {isLoaded ? null : <ImageLoading />}

      <figure {...figureAttrs}>
        <img
          key={src}
          loading="lazy"
          src={imgSrc || FALLBACK_SRC_IMAGE}
          onError={() => {
            if (imgSrc !== FALLBACK_SRC_IMAGE) {
              setImgSrc(FALLBACK_SRC_IMAGE);
              setLoaded(false);
            }
          }}
          onLoad={() => {
            setLoaded(true);
          }}
          style={{
            display: "block",
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 200ms ease-in-out",
          }}
          {...props}
        />
      </figure>
    </ImageStyled>
  );
};

const Image = memo(Image_);
export default Image;
