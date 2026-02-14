import { memo } from "react";
import Icons from "../Icons";

const ImageLoading_ = () => {
  return (
    <div className="img-loading">
      <Icons type="cat-loading-image" className="img-loading-icon" />
      <div className="img-loading-text">Loading Image...</div>
    </div>
  );
};

const ImageLoading = memo(ImageLoading_);
export default ImageLoading;
