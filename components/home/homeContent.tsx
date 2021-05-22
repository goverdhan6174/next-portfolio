import React from "react";

import { BoxContainer } from "../../styles/customStyles";
import { ContentHeadline } from "../../styles/homeStyles";
import withRootTriggerAnimation from "../../hooks/withRootTriggerAnimation";

function HomeContent() {
  return (
    <>
      <BoxContainer fluid={false}>
        <ContentHeadline>
          Whistler apres backside, <br />
          sucker hole poaching hardtail ollie ripping shred twister back
          country. Taco glove endo heli Whistler core shot hero pipe 180 whip
          huckfest flow moguls hammer. Bump hurl carcass gear jammer brain
          bucket T-bar huck ride around betty grip tape sketching berm gnar pow
          pow reverse camber ripper. 180 couloir heli chowder corduroy daffy
          huck gapers grunt hot dogging epic free ride skinny bunny slope.
          Snowboard dust on crust park, euro Skate derailleur spread eagle ACL
          freshies ollie.
        </ContentHeadline>
      </BoxContainer>
    </>
  );
}

export default withRootTriggerAnimation(HomeContent, "-30%");
