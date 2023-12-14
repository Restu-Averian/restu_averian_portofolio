import { Image as ImageChakra } from "@chakra-ui/react";
import { useState } from "react";
import PlaceholderImg from "../assets/placeholder.jpg";

/**
 *
 * @param {import('@chakra-ui/react').ImageProps} props
 * @returns
 */
const Image = ({ src, ...props }) => {
  const [loadImg, setLoadImg] = useState(false);

  return (
    <ImageChakra
      objectFit="cover"
      src={loadImg && src ? src : PlaceholderImg}
      alt="image not loaded"
      borderRadius="lg"
      w="100%"
      loading="lazy"
      onLoad={() => {
        setLoadImg(true);
      }}
      {...props}
    />
  );
};
export default Image;
