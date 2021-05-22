import React, { useState } from "react";

import { AnimatePresence } from "framer-motion";

import { alignItems, justifyContent } from "../../styles/styleTypes";
import { BoxContainer, Dot } from "../../styles/customStyles";
import { Content, ContentHeadline, Headline, Video } from "../../styles/homeStyles";
import { Center, Row, Column, AspectRatio } from "../../styles/MaterialStyles";

import VideoPlayer from "../custom/video";
import { Menu } from "../../styles/headerStyles";
import useCursorAction from "../../context/actions/cursorActions";
import withRootTriggerAnimation from "../../hooks/withRootTriggerAnimation";

function HomeFeature() {
  const changeCursor = useCursorAction().changeCursorType;
  const [isShown, setIsShown] = useState(false);

  return (
    <BoxContainer>
      <Center>
        <Video
          scale={0.6}
          onMouseEnter={() => {
            setIsShown(true);
            changeCursor("HOVERED");
          }}
          onMouseLeave={() => {
            setIsShown(false);
            changeCursor("NORMAL");
          }}
        >
          <Row
            noHeight
            horizontalPadding="3rem"
            style={{ marginBottom: "-4%" }}
          >
            <Headline fontSize={1}>Featured Project</Headline>
            {isShown && (
              <AnimatePresence initial exitBeforeEnter>
                <Headline
                  fontSize={1}
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  I'm Batman
                </Headline>
              </AnimatePresence>
            )}
          </Row>
          <div>
            <AspectRatio ratio={0.5}>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  opacity: isShown ? 0.7 : 1,
                  transition: "all 0.4s ease-in-out",
                }}
              >
                <VideoPlayer videoName="video3" />
              </div>
            </AspectRatio>
          </div>
          <Column
            alignItems={alignItems.start}
            horizontalPadding="2rem"
            hasBackgroundColor
            style={{ marginTop: isShown ? "-8%" : 0 }}
          >
            <Headline fontSize={3.5} style={{ marginTop: "-9%" }}>
              MAKE HIM
            </Headline>
            <Headline fontSize={3.5}>HERO </Headline>
            <Dot style={{ marginTop: "4%" }} scale={isShown ? 0.35 : 0.2} />
          </Column>
        </Video>
      </Center>
      <Row justifyContent={justifyContent.end}>
        <Menu scale={0.4} hasBackgroundColor padding = {"0.4rem"}>
          <button onClick={() => {}} >
            <ContentHeadline fluid fontSize={"1.2rem"} fullwidth fontWeight= {600}>
              All Projects
            </ContentHeadline>
            <div
              className="hamBurgerStripContainer"
              style={{ marginLeft: "0.8rem" }}
            >
              <span className={`hamBurgerStrip ${false ? "first" : ""}`}></span>
              <span
                className={`hamBurgerStrip ${false ? "second" : ""}`}
              ></span>
            </div>
          </button>
        </Menu>
      </Row>
    </BoxContainer>
  );
}

export default withRootTriggerAnimation(HomeFeature, "-25%");
