import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import Footer from "../custom/footer";
import VideoPlayer from "../custom/video";
// import OnlineVideoPlayer from "../custom/videoContainer";

import {
  BoxContainer,
  Dot,
  NavFooter,
  NavList,
  NavVideo,
} from "../../styles/customStyles";
import { Drawer, Center, Column } from "../../styles/MaterialStyles";

import useCursorAction from "../../context/actions/cursorActions";
import { useGlobalContext } from "../../context/globalContext";
import { Logo } from "../../styles/headerStyles";
import { justifyContent } from "../../styles/styleTypes";

const videoInfo = [
  { id: "363625327", title: "hot travel", path: "video1" },
  { id: "363636035", title: "holi is love", path: "video2" },
  { id: "537144142", title: "make him hero", path: "video3" },
  { id: "392935709", title: "color an island", path: "video4" },
  { id: "308467789", title: "dead beaches", path: "video5" },
  { id: "339620738", title: "path to travel", path: "video6" },
];

function PageDrawer() {
  let globalContext = useGlobalContext();
  let isDrawerOpen = globalContext?.state.isDrawerOpen;
  let { changeCursorType } = useCursorAction();
  const [revealVideo, setRevealVideo] = useState("video1");
  const [isRevealing, setRevealing] = useState(false);
  let LoadingText = "LOADING...";

  return (
    <Drawer
      responsive
      animate={{
        transform: isDrawerOpen ? "translateX(-100%)" : "translateX(0%)",
      }}
      transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
      onMouseEnter={() => changeCursorType("TEXTED")}
      onMouseLeave={() => changeCursorType("NORMAL")}
    >
      <BoxContainer fluid={false}>
        <Column justifyContent={justifyContent.spaceBetween} >
          <div></div>
          <NavList>
            <ul>
              {videoInfo.map((vObj) => (
                <motion.li key={vObj.id}>
                  <Link href={`/project/${vObj.path}`}>
                    <motion.div
                      className="link"
                      onHoverStart={() => {
                        setRevealVideo(vObj.path);
                        setRevealing(true);
                      }}
                      onHoverEnd={() => {
                        setRevealing(false);
                      }}
                      whileHover={{
                        x: "2.5rem",
                        transition: {
                          duration: 0.4,
                          ease: [0.6, 0.05, 0.01, 0.9],
                        },
                      }}
                      onMouseEnter={() => changeCursorType("POINTER")}
                      onMouseLeave={() => changeCursorType("TEXTED")}
                    >
                      <Dot /> <p>{vObj.title}</p>
                    </motion.div>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </NavList>
          <NavFooter>
            <Footer isPrimary={false} />
          </NavFooter>
        </Column>
      </BoxContainer>
      <NavVideo>
        <motion.div
          className="reveal"
          animate={{
            transform: isRevealing ? "translateX(-100%)" : "translateX(-1%)",
          }}
        ></motion.div>

        <Center
          style={{
            position: "absolute",
            height: "100%",
            width: "10%",
            top: 0,
            right: "18%",
            zIndex: 54,
          }}
        >
          <Logo
            size={1.5}
            key={1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "backInOut", duration: 0.4 }}
            exit={{ opacity: 0, height: 0 }}
            style={{ transform: "rotate(-90deg)" }}
          >
            <Link href="/">
              <a
                onMouseEnter={() => changeCursorType("HOVERED")}
                // onMouseLeave={() => changeCursorType("NORMAL")}
              >
                {LoadingText}
              </a>
            </Link>
          </Logo>
        </Center>
        <AnimatePresence initial exitBeforeEnter>
          <motion.div
            style={{
              width: "100%",
              height: "100%",
              zIndex: 55,
              position: "absolute",
              right: 0,
            }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={revealVideo}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <VideoPlayer videoName={revealVideo} />
            {/* <OnlineVideoPlayer videoId={revealVideo} /> */}
          </motion.div>
        </AnimatePresence>
      </NavVideo>
    </Drawer>
  );
}

export default PageDrawer;
