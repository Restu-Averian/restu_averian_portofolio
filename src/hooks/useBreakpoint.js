import { useEffect, useState } from "react";
import { css } from "styled-components";

const BREAKPOINT = { xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1600 };

const BREAKPOINT_MAX_WIDTH = {
  xs: BREAKPOINT.sm - 0.02,
  sm: BREAKPOINT.md - 0.02,
  md: BREAKPOINT.lg - 0.02,
  lg: BREAKPOINT.xl - 0.02,
  xl: BREAKPOINT.xxl - 0.02,
};

function checkMatches(mqls) {
  return {
    xs: mqls.xs.matches,
    sm: mqls.sm.matches,
    md: mqls.md.matches,
    lg: mqls.lg.matches,
    xl: mqls.xl.matches,
    xxl: mqls.xxl.matches,
  };
}

const useBreakpoint = () => {
  const [screens, setScreens] = useState({
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    xxl: false,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const MEDIA_QUERY_LISTS = {
      xs: window.matchMedia(`(min-width:${BREAKPOINT.xs}px)`),
      sm: window.matchMedia(`(min-width:${BREAKPOINT?.sm}px)`),
      md: window.matchMedia(`(min-width:${BREAKPOINT?.md}px)`),
      lg: window.matchMedia(`(min-width:${BREAKPOINT?.lg}px)`),
      xl: window.matchMedia(`(min-width:${BREAKPOINT?.xl}px)`),
      xxl: window.matchMedia(`(min-width:${BREAKPOINT?.xxl}px)`),
    };

    const onChange = () => setScreens(checkMatches(MEDIA_QUERY_LISTS));

    onChange();

    Object.values(MEDIA_QUERY_LISTS).forEach((m) => {
      m?.addEventListener("change", onChange);
    });
    return () =>
      Object.values(MEDIA_QUERY_LISTS).forEach((m) => {
        m?.removeEventListener("change", onChange);
      });
  }, []);

  return {
    xs: screens.xs && !screens.sm,
    sm: screens.sm && !screens.md,
    md: screens.md && !screens.lg,
    lg: screens.lg && !screens.xl,
    xl: screens.xl && !screens.xxl,
    xxl: screens.xxl,
  };
};

export const MEDIA_QUERY_CSS = {
  xs: (styles) => css`
    @media (max-width: ${BREAKPOINT_MAX_WIDTH?.xs}px) {
      ${styles}
    }
  `,
  sm: (styles) => css`
    @media (min-width: ${BREAKPOINT.sm}px) and (max-width: ${BREAKPOINT_MAX_WIDTH?.sm}px) {
      ${styles}
    }
  `,
  md: (styles) => css`
    @media (min-width: ${BREAKPOINT.md}px) and (max-width: ${BREAKPOINT_MAX_WIDTH?.md}px) {
      ${styles}
    }
  `,
  lg: (styles) => css`
    @media (min-width: ${BREAKPOINT.lg}px) and (max-width: ${BREAKPOINT_MAX_WIDTH?.lg}px) {
      ${styles}
    }
  `,
  xl: (styles) => css`
    @media (min-width: ${BREAKPOINT.xl}px) and (max-width: ${BREAKPOINT_MAX_WIDTH?.xl}px) {
      ${styles}
    }
  `,
  xxl: (styles) => css`
    @media (min-width: ${BREAKPOINT.xxl}px) {
      ${styles}
    }
  `,
};

export default useBreakpoint;
