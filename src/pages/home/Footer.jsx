import { memo } from "react";
import { Flex } from "../../components/global/Layout";
import Icons from "../../components/global/Icons";

const Footer_ = () => {
  return (
    <div
      style={{
        backgroundColor: "rgba(var(--primary-color-code))",
        marginTop: 63,
        fontFamily: `"Playfair Display", serif`,
      }}
    >
      <p
        style={{
          color: "#9CA3AF",
          padding: 52,
          paddingBottom: 24,
        }}
      >
        Let’s build something scalable!
      </p>

      <div>
        <h2
          style={{
            margin: 0,
            fontSize: 42,
            color: "#FFFF",
            padding: "0px 52px",
            cursor: "pointer",
            width: "max-content",
          }}
        >
          restuaverianputra123@gmail.com
        </h2>

        <Icons />
      </div>

      <div
        style={{
          marginTop: 48,
          borderTop: "1px solid #312E81",
        }}
      >
        <Flex
          gap={24}
          alignItems="center"
          style={{
            padding: "32px 52px 48px",
          }}
          justifyContent="space-between"
        >
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              gap: 8,
            }}
          >
            <li
              style={{
                color: "#E5E7EB",
              }}
            >
              GITHUB
            </li>
            <li
              style={{
                color: "#E5E7EB",
              }}
            >
              LINKEDIN
            </li>
            <li
              style={{
                color: "#E5E7EB",
              }}
            >
              NPM PACKAGE
            </li>
          </ul>

          <p
            style={{
              color: "#6B7280",
            }}
          >
            © 2026 Restu Averian Putra
          </p>
        </Flex>
      </div>
    </div>
  );
};

const Footer = memo(Footer_);
export default Footer;
