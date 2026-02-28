import styled from "styled-components";
import bgSelectedProjects from "../../assets/home/bg-selected-projects.webp";

export const SelectedWorksMobileStyled = styled.div`
  .hm__sw {
    background-image: url("${bgSelectedProjects}");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    min-height: 400px;
    position: relative;
    padding: 16px 0px 58px 0px;
    margin-top: 200px;

    &-title-section {
      display: flex;
      align-items: center;
      margin-top: 18px;
      z-index: 1;
      margin-bottom: 12px;
      gap: 18px;
      margin-left: 0px;

      &-text {
        font-family: "Caveat", cursive;
        color: rgba(253, 246, 227);
        font-weight: normal;
        margin-left: 12px;
        font-size: 32px;
      }

      &-icon {
        transform: rotate(3deg);
        color: var(--bg-color);
        width: 72px;
        height: 70px;
      }
    }

    &-list-projects {
      gap: 36px;
      justify-content: center;
      position: relative;
      flex-wrap: wrap;

      &-btn-explore {
        font-size: 12px !important;
      }
    }

    &-cat-footprint {
      &-1 {
        position: absolute;
        top: 210px;
        left: 48px;
        color: var(--bg-color);

        &-item {
          &-1 {
            transform: rotate(90deg);
          }
          &-2 {
            transform: rotate(-12deg);
            margin-top: 36px;
          }
        }
      }

      &-2 {
        position: absolute;
        top: 82px;
        right: 120px;
        color: var(--bg-color);
        gap: 24px;

        &-item {
          &-1 {
            transform: rotate(10deg);
            margin-top: 24px;
          }
          &-2 {
            transform: rotate(-90deg);
          }
        }
      }
    }

    &-ask-txt-persuasive {
      position: absolute;
      bottom: 126px;
      transform: rotate(-6deg);
      color: #fdf6e3;
      font-family: "Caveat", cursive;
      font-weight: bold;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
      left: unset;
      font-size: 28px;
    }

    &-explore-more {
      position: absolute;
      transform: rotate(-2deg);
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
      padding: 8px 16px;
      right: 32px;
      bottom: 28px;

      &:hover {
        transform: rotate(0deg);
        transition: all 150ms ease-in-out;

        .hm__sw-explore-more-btn {
          &::after {
            width: calc(100% - 24px);
          }
        }
      }

      &-btn {
        font-family: "Quicksand", sans-serif;
        font-weight: bold;
        color: #fdf6e3;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
        font-size: 24px;

        &::after {
          content: "";
          border-bottom: 3px solid #fdf6e3;
          width: 0px;
          transition: width 240ms;
          transition-timing-function: steps(24, end);
          will-change: width;
        }
      }

      &-icon {
        transform: scale(-1, 1);
        color: var(--bg-color);
      }
    }
  }
`;

export const SelectedWorksDesktopStyled = styled.div`
  .hm__sw {
    background-image: url("${bgSelectedProjects}");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    min-height: 400px;
    padding: 48px 120px 12px;
    position: relative;

    &-content {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 48px;
      position: relative;

      &-list-projects {
        position: relative;
        justify-content: center;
        flex-wrap: nowrap;
        width: 600px;
        height: 320px;
      }

      &-texts {
        &-title-section {
          display: flex;
          align-items: center;
          margin-top: 18px;
          z-index: 1;
          margin-bottom: 12px;
          gap: 18px;
          margin-left: 0px;

          &-text {
            font-family: "Caveat", cursive;
            color: rgba(253, 246, 227);
            font-weight: normal;
            margin-left: 12px;
            font-size: 80px;
          }

          &-icon {
            transform: rotate(3deg);
            color: var(--bg-color);
            width: 100px;
            height: 98px;
          }
        }

        &-btn {
          align-items: center;
          -webkit-tap-highlight-color: transparent;
          justify-content: center;

          &-text {
            font-family: "Quicksand", sans-serif;
            font-weight: bold;
            color: #fdf6e3;
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
            font-size: 24px;

            &::after {
              content: "";
              border-bottom: 3px solid var(--bg-color);
              width: 0px;
              transition: width 240ms;
              transition-timing-function: steps(24, end);
              will-change: width;
            }
          }

          &-icon {
            transform: scale(-1, 1);
            color: var(--bg-color);
          }
        }
      }

      &-ask-tech {
        position: absolute;
        transform: rotate(-6deg);
        color: var(--bg-color);
        font-family: "Caveat", cursive;
        font-weight: bold;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        font-size: 28px;
        right: 120px;
        bottom: -50px;
      }
    }

    &-cat-footprint {
      &-1 {
        color: var(--bg-color);
        position: absolute;
        top: 38px;
        left: 48px;

        &-item {
          &-1 {
            transform: rotate(90deg);
            width: 28px;
          }
          &-2 {
            transform: rotate(-12deg);
            margin-top: 28px;
            width: 28px;
          }
        }
      }

      &-2 {
        position: absolute;
        bottom: 36px;
        right: 120px;
        color: var(--bg-color);
        gap: 12px;

        &-item {
          &-1 {
            transform: rotate(10deg);
            margin-top: 28px;
            width: 28px;
          }
          &-2 {
            transform: rotate(-90deg);
            width: 28px;
          }
        }
      }
    }
  }
`;
