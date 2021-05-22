import React from "react";
import ExpandList from "../material/expandList";
import ListStateHolder from "../material/ListStateHolder";

import {
  BoxContainer,
  DotAni,
  ScaleContainer,
} from "../../styles/customStyles";
import { Content, ContentHeadline } from "../../styles/homeStyles";
import { Center, Column, Row } from "../../styles/MaterialStyles";
import { alignItems, justifyContent } from "../../styles/styleTypes";
import withRootTriggerAnimation from "../../hooks/withRootTriggerAnimation";

// Accordion Data
const accordions = [
  {
    id: 0,
    title: "Pre-Production",
    results: [
      "Creative Development",
      "Writing",
      "Creative Development",
      "Writing",
      "Storyboards",
      "Art Direction",
      "Creative Direction",
      "Location Scouting",
      "Casting",
    ],
  },
  {
    id: 1,
    title: "Video Production",
    results: [
      "Principle Photography",
      "Production Management",
      "Crew",
      "Dailies",
      "LTO-Archiving",
    ],
  },
  {
    id: 2,
    title: "Post-Production",
    results: [
      "Colour correction",
      "Offline editing",
      "Online editing",
      "VFX",
      "Animation and motion graphics",
      "Closed captioning and subtitles",
      "Descriptive video",
      "Dailies",
      "Quality control",
      "LTO Archiving",
    ],
  },
  {
    id: 3,
    title: "Audio Post-Production",
    results: [
      "We work with some amazing partners who provide:",
      "Sound Design",
      "SFX",
      "Music",
      "Sound Mix",
    ],
  },
];

function HomeAbout() {
  return (
    <BoxContainer>
      <Center>
        <ScaleContainer scale={0.8}>
          <Row
            responsive
            rAlignItems={alignItems.center}
            alignItems={alignItems.start}
            justifyContent={justifyContent.spaceBetween}
          >
            <Column margin={"5%"} alignItems={alignItems.start}>
              <ContentHeadline fluid fullwidth>
                Bro schwag butter chain ring face plant pillow popping laps
                white room stomp avie chillax steed stunt.
              </ContentHeadline>
              <br />
              <Content fluid fullwidth fontSize={"1.4rem"}>
                Bro ipsum dolor sit amet skid lid OTB carve steed travel grind
                dust on crust hot dogging flow ACL. Brain bucket Bike dirt,
                trail swag greasy schwag spin huckfest bump. Ripper presta
                sucker hole, wheelie stoked rip huck rail bomb hole grip tape
                epic. Spread eagle hardtail yard sale 360 Whistler granny gear
                epic wack frozen chicken heads brain bucket line carve schwag
                free ride hero.
              </Content>
            </Column>
            <Column
              noWidth
              margin={"5%"}
              justifyContent={justifyContent.spaceAround}
            >
              <Content fluid fontSize={"1.7rem"}>
                Services
              </Content>
              <ListStateHolder>
                {accordions.map((accordion) => (
                  <ExpandList
                    key={accordion.id}
                    heading={accordion.title}
                    fluid={false}
                    iconRender={(isActive: boolean) => (
                      <>
                        <DotAni
                          animate={{ rotate: isActive ? 0 : 45, x: "29%" }}
                          transition={{
                            duration: 0.2,
                            ease: [0.6, 0.05, -0.01, 0.9],
                          }}
                          scale={0.7}
                        />
                        <DotAni
                          animate={{ rotate: isActive ? 0 : -45, x: "-29%" }}
                          transition={{
                            duration: 0.2,
                            ease: [0.6, 0.05, -0.01, 0.9],
                          }}
                          scale={0.7}
                        />
                      </>
                    )}
                  >
                    {accordion.results.map((result, index) => (
                      <Content
                        key={index}
                        fluid
                        fullwidth
                        fontSize={"1rem"}
                        style={{ marginTop: "3%" }}
                      >
                        {result}
                      </Content>
                    ))}
                  </ExpandList>
                ))}
              </ListStateHolder>
            </Column>
          </Row>
        </ScaleContainer>
      </Center>
    </BoxContainer>
  );
}

export default withRootTriggerAnimation(HomeAbout, "-10%");
