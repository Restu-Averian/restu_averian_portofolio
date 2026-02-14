import { memo } from "react";
import Icons from "../../global/Icons";

const MyContactstText_ = () => {
  return (
    <div
      className="ftr__my-contacts"
      onClick={() => {
        const footerDOM = document.querySelector(".ftr__social-media");

        if (footerDOM) {
          footerDOM?.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest",
          });
        }
      }}
    >
      <p className="ftr__my-contacts-text">My Contacts?</p>
      <Icons
        type="cat-add-contacts"
        style={{
          width: 36,
        }}
      />
    </div>
  );
};

const MyContactstText = memo(MyContactstText_);
export default MyContactstText;
