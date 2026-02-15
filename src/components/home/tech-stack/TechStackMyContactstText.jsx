import { memo } from "react";
import Icons from "../../global/Icons";
import { onScrollTarget } from "../../../helpers";

const TechStackMyContactstText_ = () => {
  return (
    <div
      className="hm__ts-my-contacts"
      onClick={() => {
        const footerDOM = document.querySelector(".ftr__social-media");

        if (footerDOM) {
          onScrollTarget(footerDOM);
        }
      }}
    >
      <p className="hm__ts-my-contacts-text">My Contacts?</p>

      <Icons className="hm__ts-my-contacts-icon" type="cat-add-contacts" />
    </div>
  );
};

const TechStackMyContactstText = memo(TechStackMyContactstText_);
export default TechStackMyContactstText;
