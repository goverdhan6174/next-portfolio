import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const BoxContainer = styled.div<{ fluid?: boolean; padding?: string }>`
  z-index: 997;
  position: relative;
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 32px;
  width: 100%;
  height: inherit;
  /* background-color: ${(props) => props.theme.backgroundColor}; */

  @media (min-width: 1024px) {
    max-width: 960px;
  }
  @media (min-width: 1216px) {
    max-width: 1152px;
  }
  @media (min-width: 1488px) {
    max-width: 1244px;
  }

  ${(props) =>
    props.fluid &&
    css`
      padding: 0;
      margin: 0;
      max-width: 100%;
    `}

  ${(props) =>
    !!props.padding &&
    css`
      padding: 0 ${props.padding};
    `}
`;

export const Cursor = styled.div`
  pointer-events: none;
  z-index: 999;
  position: absolute;
  top: -20%;
  left: 0;
  height: 24px;
  width: 24px;
  border: 0px solid ${(props) => props.theme.primaryColor};
  border-radius: 100%;
  background-color: ${(props) => props.theme.primaryColor};
  transform: translate(-50%, -50%);
  transition: all 0.1s ease-in-out;
  transform-origin: center;
  transition-property: width, height, border;
  will-change: width, height, border, top, left, transform;

  &.texted {
    background-color: ${(props) => props.theme.textColor};
  }

  &.pointer {
    border: 3px solid ${(props) => props.theme.textColor};
    width: 40px;
    height: 40px;
    background-color: transparent;
  }

  &.hovered {
    background: transparent;
    width: 40px;
    height: 40px;
    border: 3px solid ${(props) => props.theme.primaryColor};
  }
`;

export const Dot = styled.span<{ scale?: number }>`
  height: 0.1rem;
  width: 2.5rem;
  border-radius: 7%;
  margin-right: 0.75rem;
  transform: translateY(10%);
  background-color: ${(props) => props.theme.textColor};
  transition: all 0.6s ease-in-out;

  ${(props) =>
    !!props.scale &&
    css`
      height: ${props.scale + "rem"};
      width: ${props.scale * 25 + "rem"};
    `};
`;

export const DotAni = styled(motion.span)<{ scale?: number }>`
  height: 0.2rem;
  width: 2.5rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.textColor};

  ${(props) =>
    !!props.scale &&
    css`
      height: ${props.scale + "rem"};
      width: ${props.scale * 25 + "rem"};
    `};
`;

export const ErrorH1 = styled(motion.h1)<{}>`
  display: inline-block;
  border-right: 2px solid ${(props) => props.theme.textColor};
  margin: 0;
  margin-right: 20px;
  padding: 10px 23px 10px 0;
  font-size: 24px;
  font-weight: 500;
  vertical-align: top;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const ErrorH2 = styled(motion.h2)<{}>`
  display: inline-block;
  font-size: 14px;
  font-weight: normal;
  line-height: inherit;
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const ErrorTextContainer = styled(motion.div)<{}>`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 14px;
  font-weight: normal;
  line-height: inherit;
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.textColor};

  a {
    font-weight: 600;
    font-size: 17px;
    color: ${(props) => props.theme.textColor};
  }
`;

export const NavFooter = styled.div`
  margin-bottom: 3rem;
  width: 70%;
`;

export const NavFooterText = styled(motion.blockquote)<{ isPrimary?: boolean }>`
  color: ${(props) => props.theme.textColor};
  ${(props) =>
    props.isPrimary &&
    css`
      color: ${(props) => props.theme.primaryColor};
    `};
`;

export const NavFooterLink = styled(motion.a)<{ isPrimary?: boolean }>`
  color: ${(props) => props.theme.textColor};
  ${(props) =>
    props.isPrimary &&
    css`
      color: ${(props) => props.theme.primaryColor};
    `};
`;

export const NavList = styled.div`
  /* height: 100%; */
  width: 100%;
  display: flex;
  align-items: center;

  ul {
    li {
      display: flex;
      font-size: 2rem;
      height: 72px;
      line-height: 72px;
      text-transform: uppercase;
      font-weight: 900;
      overflow: hidden;
      padding: 0;

      a {
        cursor: none;
      }

      .link {
        position: relative;
        display: flex;
        align-items: center;
        color: ${(props) => props.theme.primaryColor};
        left: -2.5rem;

        p {
          color: ${(props) => props.theme.textColor};
        }
        .active {
          color: ${(props) => props.theme.primaryColor};
        }
      }
    }
  }
`;

export const NavVideo = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 75%;

  .reveal {
    position: absolute;
    top: 0;
    left: 0;
    width: 102%;
    height: 100%;
    z-index: 99;
    /* background: ${(props) => props.theme.backgroundColor}; */
    background: ${(props) => props.theme.primaryColor};
    transform-origin: center;
    transform: translateX(0);
    transition: all 0.4s ease-out;
    transition-property: transform;
    will-change: transform;
  }

  video {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const ScaleContainer = styled.div<{ scale: number }>`
  position: relative;
  height: 100%;
  width: 100%;
  /* overflow: hidden; */

  ${(props) =>
    props.scale &&
    css`
      width: calc(${props.scale} * 100%);
    `}
`;

export const OnlineVideoContainer = styled.div`
  min-width: 100%;
  min-height: 100vh;
  display: inline-block;
  position: relative;
  &:after {
    padding-top: 56.25%; /* 16:9 ratio - divide height by width and multiply by 100 */
    display: block;
    content: "";
  }

  iframe {
    display: flex;
    min-height: 100%;
    min-width: 100%;
    position: absolute;
    top: 0;
    left: 0;

    #player {
      width: 100%;
      height: 100%;

      video {
        object-fit: cover;
      }
    }
  }
`;
