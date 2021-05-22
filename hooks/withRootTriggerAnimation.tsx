import React, { useEffect } from "react";

import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

import { Section } from "../styles/MaterialStyles";

function withRootTriggerAnimation(
  ComponentToWrap: React.FC<{ isPrimary?: boolean }>,
  rootMargin: string
) {
  function AnimatedComponent(props: any) {
    const animation = useAnimation();
    const [contentRef, inView] = useInView({
      triggerOnce: true,
      rootMargin: rootMargin,
    });

    useEffect(() => {
      if (inView) {
        animation.start("visible");
      }
    }, [animation, inView]);

    return (
      <Section
        style={{ marginBottom: "170px" }}
        parentDimension={false}
        ref={contentRef}
        animate={animation}
        initial="hidden"
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] },
          },
          hidden: { opacity: 0, y: 72 },
        }}
      >
        <ComponentToWrap {...props} />
      </Section>
    );
  }

  return AnimatedComponent;
}

export default withRootTriggerAnimation;
