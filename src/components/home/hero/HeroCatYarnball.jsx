import { memo } from "react";
import Icons from "../../global/Icons";

const HeroCatYarnball_ = () => {
  return (
    <>
      <Icons type="cat-lay-down" className="hm__hero-icon-catlaydown" />

      <Icons type="yarn-ball" className="hm__hero-icon-yarnball" />
    </>
  );
};

const HeroCatYarnball = memo(HeroCatYarnball_);
export default HeroCatYarnball;
