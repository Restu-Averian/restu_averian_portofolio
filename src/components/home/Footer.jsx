import { memo } from "react";
import { Flex } from "../global/Layout";
import { Icon } from "@iconify/react";
import FooterStyled, {
  CardConectionStyled,
} from "../../styled/layout/Footer.styled";
import { LIST_SOCIAL_CONNECTIONS } from "../../constants";
import Icons from "../global/Icons";

const Footer_ = () => {
  return (
    <FooterStyled>
      <section>
        <p className="copyright">© 2026 Restu Averian Putra</p>

        <div className="wrapper-list-connection">
          {LIST_SOCIAL_CONNECTIONS?.map((item, idx) => {
            return (
              <CardConectionStyled
                key={idx}
                $rotate={item?.rotate}
                onClick={() => {
                  window.open(item?.link, "_blank");
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <Icon icon={item?.icon} width={210} color="#839496" />
                </div>

                <p>{item?.text}</p>
              </CardConectionStyled>
            );
          })}
        </div>

        <Flex
          alignItems="center"
          justifyContent="center"
          gap={48}
          style={{
            marginTop: 67,
          }}
        >
          <p className="connect-with-me">Connect With Me!</p>

          <Icon
            icon="streamline-ultimate:business-lucky-cat-bold"
            width={84}
            style={{
              transform: "rotate(-12deg)",
            }}
            color="#839496"
          />
        </Flex>
      </section>

      <section
        style={{
          marginTop: 240,
          display: "flex",
          gap: 8,
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <span
            style={{
              fontFamily: "'Quicksand', sans-serif",
              fontSize: 40,
            }}
          >
            Credits
          </span>

          <p
            style={{
              fontFamily: "'Patrick Hand', sans-serif",
              fontSize: 60,
              cursor: "pointer",
            }}
            onClick={() => {
              window.open(
                "https://thenounproject.com/creator/iconka/",
                "_blank",
              );
            }}
          >
            Denis Sazhin
          </p>

          <p
            style={{
              fontFamily: "'Patrick Hand', sans-serif",
              fontSize: 60,
              cursor: "pointer",
            }}
            onClick={() => {
              window.open(
                "https://thenounproject.com/creator/inmyheart/",
                "_blank",
              );
            }}
          >
            inmyheart
          </p>
          <p
            style={{
              fontFamily: "'Patrick Hand', sans-serif",
              fontSize: 60,
              cursor: "pointer",
            }}
            onClick={() => {
              window.open(
                "https://thenounproject.com/creator/Puckung/",
                "_blank",
              );
            }}
          >
            Teewara soontorn
          </p>
        </div>

        <Icons type="cat-lay-one-back" />

        <div
          onClick={() => {
            window.open(
              "https://slidesgo.com/theme/cat-illustrator-portfolio-infographics",
              "_blank",
            );
          }}
        >
          <span
            style={{
              fontFamily: "'Quicksand', sans-serif",
              fontSize: 40,
            }}
          >
            Inspired By
          </span>

          <p
            style={{
              fontFamily: "'Patrick Hand', sans-serif",
              fontSize: 60,
            }}
          >
            Slides Go
          </p>
        </div>
      </section>
    </FooterStyled>
  );
};

const Footer = memo(Footer_);
export default Footer;
