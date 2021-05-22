import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Banner = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
`;

export const BannerTitle = styled(motion.h1)`
  z-index: 997;
  pointer-events: none;
  position: absolute;
  bottom: -4rem;
  left: -1rem;
  color: ${(props) => props.theme.textColor};
`;

export const Content = styled.p<{
  fullwidth?: boolean;
  fluid?: boolean;
  fontSize?: string;
  widthAuto?: boolean;
}>`
  width: 63%;
  font-size: 1.3rem;
  font-weight: 400;
  margin-left: 20%;
  color: ${(props) => props.theme.textColor};

  ${(props) =>
    props.fullwidth &&
    !props.widthAuto &&
    css`
      width: 100%;
    `};

  ${(props) =>
    !props.fullwidth &&
    props.widthAuto &&
    css`
      width: auto;
    `};

  ${(props) =>
    props.fluid &&
    css`
      padding: 0;
      margin: 1% 0;
    `}

  ${(props) =>
    !!props.fontSize &&
    css`
      font-size: ${props.fontSize};
    `}
`;

export const ContentHeadline = styled.h2<{
  fullwidth?: boolean;
  fluid?: boolean;
  fontSize?: string;
  fontWeight?: number;
}>`
  display: inline-flex;
  width: 80%;
  font-size: 1.7rem;
  font-weight: 400;
  margin-left: 20%;
  color: ${(props) => props.theme.textColor};

  ${(props) =>
    props.fullwidth &&
    css`
      width: 100%;
      margin-left: 0%;
    `};

  ${(props) =>
    props.fluid &&
    css`
      padding: 0;
      margin: 0;
    `}

  ${(props) =>
    !!props.fontSize &&
    css`
      font-size: ${props.fontSize};
    `}

    
  ${(props) =>
    !!props.fontWeight &&
    css`
      font-weight: ${props.fontWeight};
    `}
`;

export const Headline = styled(motion.span)<{
  fontSize?: number;
  fontWeight?: number;
}>`
  z-index: 997;
  position: relative;
  display: block;
  font-size: 14rem;
  font-weight: 900;
  line-height: 0.76;
  color: ${(props) => props.theme.textColor};

  ${(props) =>
    !!props.fontSize &&
    css`
      font-size: ${props.fontSize + "rem"};
    `}

  ${(props) =>
    !!props.fontWeight &&
    css`
      font-weight: ${props.fontWeight};
    `}
`;

export const HomeContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
`;

export const Video = styled.div<{ scale: number }>`
  position: relative;
  height: 100%;
  width: 100%;
  /* overflow: hidden; */

  ${(props) =>
    props.scale &&
    css`
      width: calc(${props.scale} * 100%);
    `}

  video {
    object-fit: cover;
    height: 100%;
  }
`;
