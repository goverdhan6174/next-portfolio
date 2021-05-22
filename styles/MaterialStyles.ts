import styled, { css } from "styled-components";
import { motion } from "framer-motion";

import { alignItems, justifyContent } from "./styleTypes";

export const AspectRatio = styled.div<{ ratio?: number }>`
  /* Ratio :: height/width; === 3/4*/
  width: 100%;
  padding-top: 100%;
  position: relative;
  overflow: hidden;

  ${(props) =>
    !!props.ratio &&
    css`
      /* margin-top : calc( ${props.ratio * -100 + "%"}); */
      padding-top: calc(${props.ratio * 100 + "%"});
    `}
`;

export const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export const Card = styled.div`
  position: relative;
  display: inline-block;
  margin: 1rem;
  max-width: 100%;
  padding: 1rem;
  border: 0px solid rgba(230, 230, 230, 1);
  background-color: #fff;
  box-shadow: 0px -1px 2px rgba(58, 58, 58, 0.1),
    1px 1px 2px rgba(58, 58, 58, 0.1);

  &:before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 4rem;
    left: 0px;
    top: 0px;
  }
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Column = styled.div<{
  alignItems?: alignItems;
  justifyContent?: justifyContent;
  noHeight?: boolean;
  hasBackgroundColor?: boolean;
  horizontalPadding?: string;
  verticalPadding?: string;
  padding?: string;
  margin?: string;
  noWidth?: boolean;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  transition: all 0.6s ease-in;
  width: 100%;
  height: 100%;

  ${(props) =>
    !!props.alignItems &&
    css`
      align-items: ${props.alignItems};
    `};
  ${(props) =>
    !!props.justifyContent &&
    css`
      justify-content: ${props.justifyContent};
    `};
  ${(props) =>
    !!props.noHeight &&
    css`
      height: 0;
    `};
  ${(props) =>
    props.hasBackgroundColor &&
    css`
      background-color: ${(props) => props.theme.backgroundColor};
    `};
  ${(props) =>
    (props.verticalPadding || props.horizontalPadding) &&
    css`
      padding: ${props.verticalPadding ? props.verticalPadding : 0}
        ${props.horizontalPadding ? props.horizontalPadding : 0};
    `};

  ${(props) =>
    props.padding &&
    css`
      padding: ${props.padding};
    `};
  ${(props) =>
    props.margin &&
    css`
      margin: ${props.margin};
    `};

  ${(props) =>
    props.noWidth &&
    css`
      width: auto;
    `};
`;

export const Drawer = styled(motion.div)<{ responsive?: boolean }>`
  z-index: 800;
  position: absolute;
  top: 0;
  left: 100%;
  height: 100vh;
  width: 75%;
  background: ${(props) => props.theme.primaryColor};
  /* background-color: ${(props) => props.theme.backgroundColor}; */

  @media only screen and (max-width: 768px) {
    ${(props) =>
      props.responsive &&
      css`
        width: 100%;
      `};
  } ;
`;

export const ExpandedContent = styled(motion.div)`
  display: block;
  width: 100%;
  overflow: hidden;
  font-size: 1.4rem;
`;

export const ExpandedHeader = styled.div`
  width: 100%;
  color: ${(props) => props.theme.primaryColor};
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.4rem;
  margin: 8px 0;
`;

export const ExpandedList = styled.div<{ padding?: string }>`
  width: 100%;
  ${(props) =>
    props.padding &&
    css`
      padding: ${props.padding};
    `}
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin: 2%;
  span {
    width: 16px;
    height: 4px;
    background-color: ${(props) => props.theme.primaryColor};
    transition: 0.1s ease-in-out;
  }
`;

export const Row = styled.div<{
  responsive?: boolean;
  alignItems?: alignItems;
  rAlignItems?: alignItems;
  justifyContent?: justifyContent;
  noHeight?: boolean;
  horizontalPadding?: string;
  verticalPadding?: string;
}>`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  ${(props) =>
    !!props.alignItems &&
    css`
      align-items: ${props.alignItems};
    `};
  ${(props) =>
    !!props.justifyContent &&
    css`
      justify-content: ${props.justifyContent};
    `};
  ${(props) =>
    !!props.noHeight &&
    css`
      height: 0;
    `};
  ${(props) =>
    css`
      padding: ${!!props.verticalPadding ? props.verticalPadding : 0}
        ${!!props.horizontalPadding ? props.horizontalPadding : 0};
    `};

  @media only screen and (max-width: 768px) {
    ${(props) =>
      props.responsive &&
      css`
        flex-direction: column;
      `};

    ${(props) =>
      props.responsive &&
      props.rAlignItems &&
      css`
        align-items: ${props.rAlignItems};
      `};
  } ;
`;

export const Section = styled(motion.section)<{
  parentDimension: boolean;
}>`
  position: relative;
  width: 100vw;
  height: 100%;

  ${(props) =>
    props.parentDimension &&
    css`
      width: 100%;
    `};
`;
