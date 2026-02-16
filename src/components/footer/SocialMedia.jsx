import { memo } from "react";
import { LIST_SOCIAL_CONNECTIONS } from "../../constants";
import useBreakpoint from "../../hooks/useBreakpoint";
import { CardConectionStyled } from "../../styled/layout/Footer.styled";
import { Flex } from "../global/Layout";
import { Icon } from "@iconify/react";

const SocialMedia_ = () => {
  const { xs } = useBreakpoint();

  return (
    <section className="ftr__social-media">
      <p className="ftr__social-media-copyright">© 2026 Restu Averian Putra</p>

      <div className="ftr__social-media-list">
        {LIST_SOCIAL_CONNECTIONS?.map((item, idx) => {
          return (
            <CardConectionStyled
              key={idx}
              $rotate={item?.rotate}
              onClick={() => {
                window.open(item?.link, "_blank");
              }}
              $style={{
                width: 240,
                ...(xs && {
                  width: "unset",
                }),
              }}
            >
              <div className="ftr__social-media-list-item">
                <Icon
                  className="ftr__social-media-list-item-icon"
                  icon={item?.icon}
                  width={xs ? 80 : 210}
                />

                <p className="ftr__social-media-list-item-text">{item?.text}</p>
              </div>
            </CardConectionStyled>
          );
        })}
      </div>

      <Flex className="ftr__social-media-cwm">
        <p className="ftr__social-media-cwm-text">Connect With Me!</p>

        <Icon
          icon="streamline-ultimate:business-lucky-cat-bold"
          width={xs ? 48 : 84}
          className="ftr__social-media-cwm-icon"
        />
      </Flex>
    </section>
  );
};

const SocialMedia = memo(SocialMedia_);
export default SocialMedia;
