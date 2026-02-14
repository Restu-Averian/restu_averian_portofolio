import { memo } from "react";
import Icons from "../../global/Icons";

const HeroCatFootprint_ = () => {
  return (
    <div className="hm__hero-icon-catfootprint">
      <Icons
        type="cat-foot-print"
        className="hm__hero-icon-catfootprint-item"
      />
      <Icons
        type="cat-foot-print"
        className="hm__hero-icon-catfootprint-item"
      />
    </div>
  );
};

const HeroCatFootprint = memo(HeroCatFootprint_);
export default HeroCatFootprint;
