import { memo } from "react";
import { Flex, SBGContainer } from "../global/Layout";
import Icons from "../global/Icons";
import FooterStyled, {
  CardConectionStyled,
} from "../../styled/layout/Footer.styled";
import inspiredByCat from "../../assets/home/inspired-by-cat.webp";
import { LIST_SOCIAL_CONNECTIONS } from "../../constants";

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
                <img
                  src={item?.icon}
                  style={{
                    width: 240,
                  }}
                />

                <p>{item?.text}</p>
              </CardConectionStyled>
            );
          })}
        </div>

        <p className="connect-with-me">Connect With Me!</p>
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
            }}
          >
            Denis Sazhin
          </p>
        </div>

        <img
          src={inspiredByCat}
          style={{
            width: 608,
          }}
        />

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
