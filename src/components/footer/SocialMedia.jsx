import { memo } from "react";
import { LIST_SOCIAL_CONNECTIONS } from "../../constants";
import useBreakpoint from "../../hooks/useBreakpoint";
import { CardConectionStyled } from "../../styled/layout/Footer.styled";
import { Flex } from "../global/Layout";
import { Icon } from "@iconify/react";

const SocialMedia_ = () => {
  const { xs } = useBreakpoint();

  return (
    <section>
      <p className="copyright">© 2026 Restu Averian Putra</p>

      <div className="wrapper-list-connection">
        {LIST_SOCIAL_CONNECTIONS?.map((item, idx) => {
          const positionValMobile = {
            1: {
              top: "-48px",
              left: 18,
            },
            2: {
              top: "96px",
            },
            3: {
              top: 80,
              left: "-38px",
            },
          };

          return (
            <CardConectionStyled
              key={idx}
              $rotate={item?.rotate}
              onClick={() => {
                window.open(item?.link, "_blank");
              }}
              {...(xs && {
                $style: {
                  ...positionValMobile?.[idx + 1],
                },
              })}
            >
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <Icon
                  icon={item?.icon}
                  width={xs ? 120 : 210}
                  color="#839496"
                />
              </div>

              <p className="lbl-connection">{item?.text}</p>
            </CardConectionStyled>
          );
        })}
      </div>

      <Flex
        alignItems="center"
        justifyContent="center"
        gap={xs ? 16 : 48}
        style={{
          marginTop: 67,
        }}
        flexWrap={xs ? "nowrap" : "wrap"}
      >
        <p className="connect-with-me">Connect With Me!</p>

        <Icon
          icon="streamline-ultimate:business-lucky-cat-bold"
          width={xs ? 52 : 84}
          style={{
            transform: "rotate(-12deg)",
          }}
          color="#839496"
        />
      </Flex>
    </section>
  );
};

const SocialMedia = memo(SocialMedia_);
export default SocialMedia;
