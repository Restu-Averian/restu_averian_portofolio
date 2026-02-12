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
              ...(!xs && {
                top: "-48px",
              }),
              left: 18,
            },
            2: {
              ...(!xs && {
                top: "5em",
              }),
            },
            3: {
              ...(!xs && {
                top: 80,
              }),
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
              $style={{
                width: 240,
                ...(xs && {
                  ...positionValMobile?.[idx + 1],
                  width: "unset",
                }),
              }}
            >
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <Icon icon={item?.icon} width={xs ? 80 : 210} color="#839496" />
              </div>

              <p className="lbl-connection">{item?.text}</p>
            </CardConectionStyled>
          );
        })}

        <CardConectionStyled
          $rotate={5}
          onClick={() => {
            const urlWA =
              "https://api.whatsapp.com/send?phone=6282391365098&text=Hi!%F0%9F%91%8B%20Aku%20lihat%20portofolio%20kamu%20dan%20tertarik%20ngobrol%20soal%20project%20frontend%20web.%20Kalau%20kamu%20oke%2C%20kita%20bisa%20call%20bentar%20(%C2%B115%E2%80%9320%20menit)%20minggu%20ini.%20Biar%20aku%20bisa%20siapin%20gambaran%20solusi%20%26%20estimasi%2C%20boleh%20isi%20singkat%3A%201)%20Tujuan%20project%202)%20Fitur%20utama%203)%20Deadline%2Ftarget%20rilis";

            window.open(urlWA, "_blank");
          }}
          $style={{
            width: 240,
            ...(xs && {
              top: 0,
              width: "unset",
            }),
          }}
        >
          <div
            style={{
              textAlign: "center",
            }}
          >
            <Icon
              icon="mingcute:whatsapp-fill"
              width={xs ? 80 : 210}
              color="#839496"
            />
          </div>

          <p className="lbl-connection">+6282391365098</p>
        </CardConectionStyled>
      </div>

      <Flex
        alignItems="center"
        justifyContent="center"
        gap={xs ? 16 : 48}
        style={{
          ...(!xs && {
            marginTop: 67,
          }),
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
