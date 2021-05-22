import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

import { Dot } from "../../styles/customStyles";
import { Headline } from "../../styles/homeStyles";
import { Section } from "../../styles/MaterialStyles";

function HomeLines() {
  const animation = useAnimation();
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-30%",
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: 175 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: [0.6, 0.05, 0.01, 0.9] },
    },
  };

  useEffect(() => {
    if (inView) {
      animation.start("show");
    }
  }, [animation, inView]);

  return (
    <Section
      style={{ marginBottom: "170px", textAlign: "end" }}
      parentDimension={false}
      ref={contentRef}
      animate={animation}
      variants={container}
      initial="hidden"
    >
      <Headline variants={item} fontSize={3.5} style={{ marginRight: "3rem" }}>
        This Site is build with React
      </Headline>
      <Headline variants={item} fontSize={4.5} style={{ marginRight: "3rem" }}>
        NEXT.js
      </Headline>
      <Dot style={{ marginTop: "4%" }} scale={0.4} />
    </Section>
  );
}

export default HomeLines;
