import React from "react";

import CanvasElement from "../custom/canvas";

import { Banner, Video, BannerTitle, Headline } from "../../styles/homeStyles";
import VideoPlayer from "../custom/video";
// import OnlineVideo from "../custom/videoContainer";
import HomeContent from "./homeContent";
import HomeFeature from "./homeFeature";
import HomeAbout from "./homeAbout";
import PageDrawer from "./pageDrawer";
import Footer from "../custom/footer";
import withRootTriggerAnimation from "../../hooks/withRootTriggerAnimation";
import HomeLines from "./homeLines";

function Home(): JSX.Element {
  const parent = {
    initial: { y: 500 },
    animate: { y: 0, transition: { staggerChildren: 0.2 } },
  };
  const child = {
    initial: { y: 500 },
    animate: {
      y: 0,
      transition: { duration: 1, ease: [0.6, 0.05, -0.01, 0.9] },
    },
  };

  let NavFooter = withRootTriggerAnimation(Footer, "-5%");

  return (
    <div style={{ overflowX: "hidden" }}>
      <Banner style={{ marginBottom: "200px" }}>
        <Video scale={1}>
          <VideoPlayer videoName="video" />
          {/* <OnlineVideo videoId="348728188" /> */}
        </Video>
        <CanvasElement />
        <PageDrawer />
        <BannerTitle variants={parent} initial="initial" animate="animate">
          <Headline variants={child}>DIG</Headline>
          <Headline variants={child}>DEEP</Headline>
        </BannerTitle>
      </Banner>
      <HomeLines />
      <HomeContent />
      <HomeFeature />
      <HomeAbout />
      <NavFooter isPrimary={true} />
    </div>
  );
}

export default Home;
