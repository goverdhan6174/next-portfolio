import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const HeaderNav = styled(motion.div)<{ noHeight: boolean }>`
  z-index: 997;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  width: 100%;

  ${(props) =>
    props.noHeight &&
    css`
      top: 50px;
      height: 0px;
    `};
`;

export const ThemeButton = styled(motion.span)<{ size?: number }>`
  position: absolute;
  display: inline-block;
  height: 1.3rem;
  width: 1.3rem;
  background: ${(props) => props.theme.primaryColor};
  margin: 0.3rem 0 0 0;
  border-radius: 100%;
  z-index: 999;

  ${(props) =>
    !!props.size &&
    css`
      height: ${props.size * 1.3 + "rem"};
      width: ${props.size * 1.3 + "rem"};
    `}
`;

export const Logo = styled(motion.div)<{ size?: number }>`
  position: absolute;
  z-index: 998;
  display: flex;
  text-align: center;

  a {
    cursor: none;
    font-size: 1.8rem;
    font-weight: 800;
    color: ${(props) => props.theme.textColor};
    transition: all 0.4 ease-in-out;

    ${(props) =>
      !!props.size &&
      css`
        font-size: ${props.size * 1.8 + "rem"};
      `}
  }
  span {
    position: relative;
    display: inline-block;
    height: 1.3rem;
    width: 1.3rem;
    margin: 0 4px;
    border-radius: 100%;
    ${(props) =>
      !!props.size &&
      css`
        height: ${props.size * 1.3 + "rem"};
        width: ${props.size * 1.3 + "rem"};
      `}
  }
`;

export const Menu = styled.div<{
  scale?: number;
  hasBackgroundColor?: boolean;
  padding?: string;
}>`
  z-index: 998;
  display: inline;
  align-items: center;
  justify-content: space-between;

  ${(props) =>
    !!props.padding &&
    css`
      padding: ${props.padding};
    `};

  ${(props) =>
    props.hasBackgroundColor &&
    css`
      background-color: ${(props) => props.theme.primaryColor};
    `};

  button {
    cursor: none;
    display: flex;
    align-items: center;
    position: relative;
    border: none;
    background: none;
    outline: none;

    .hamBurgerStripContainer {
      pointer-events: none;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      justify-items: flex-start;
      align-items: center;

      ${(props) =>
        !!props.scale &&
        css`
          height: ${props.scale * 4 + "rem"};
        `};

      .hamBurgerStrip {
        pointer-events: none;
        display: flex;
        width: 1.6rem;
        height: 0.4rem;
        background-color: ${(props) => props.theme.textColor};
        transform-origin: center;
        transition: all 0.6s ease-in-out;
        border-radius: 1px;

        &:first-child {
          transform: translateY(-0.15rem) rotate(0);
        }

        &:last-child {
          transform: translateY(0.15rem) rotate(0);
        }

        ${(props) =>
          !!props.scale &&
          css`
            height: ${props.scale * 1 + "rem"};
            width: ${props.scale * 4 + "rem"};
          `};
      }

      .first {
        &:first-child {
          transform: translateY(0.5rem) rotate(225deg);
          ${(props) =>
            !!props.scale &&
            css`
              transform: translateY(${props.scale * 0.5 + "rem"}) rotate(225deg);
            `};
        }
      }
      .second {
        &:last-child {
          transform: translateY(-0.5rem) rotate(-225deg);
          ${(props) =>
            !!props.scale &&
            css`
              transform: translateY(${props.scale * -0.5 + "rem"})
                rotate(-225deg);
            `};
        }
      }
    }
  }
`;
