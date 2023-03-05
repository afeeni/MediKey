import React from "react";
import styled from "styled-components";
import { InterNormalBlack17px, ValignTextMiddle } from "../../styledMixins";


function Ul(props) {
  const { svg } = props;

  return (
    <Ul1>
      <FlexRow>
        <Button>
          <WhatWeOffer>What We Offer</WhatWeOffer>
          <Svg src={svg} alt="svg" />
        </Button>
        <Learn>Learn</Learn>
        <Network>Network</Network>
        <Support>Support</Support>
      </FlexRow>
    </Ul1>
  );
}

const Ul1 = styled.div`
  position: relative;
  min-width: 453px;
  height: 28px;
`;

const FlexRow = styled.div`
  ${InterNormalBlack17px}
  position: relative;
  top: 3px;
  left: 37px;
  display: flex;
  align-items: center;
  min-width: 416px;
`;

const Button = styled.div`
  width: 140px;
  height: 30px;
  display: flex;
  gap: 13.5px;
`;

const WhatWeOffer = styled.div`
  ${ValignTextMiddle}
  margin-top: 1px;
  width: 115px;
  height: 28px;
  letter-spacing: -0.25px;
  line-height: 28px;
  white-space: nowrap;
`;

const Svg = styled.img`
  margin-top: 7px;
  width: 12px;
  height: 12px;
`;

const Learn = styled.div`
  ${ValignTextMiddle}
  height: 21px;
  margin-left: 34px;
  margin-bottom: 3px;
  min-width: 45px;
  letter-spacing: -0.25px;
  line-height: normal;
`;

const Network = styled.div`
  ${ValignTextMiddle}
  height: 21px;
  margin-left: 33px;
  margin-bottom: 3px;
  min-width: 67px;
  letter-spacing: -0.25px;
  line-height: normal;
`;

const Support = styled.div`
  ${ValignTextMiddle}
  height: 21px;
  margin-left: 33px;
  margin-bottom: 3px;
  min-width: 64px;
  letter-spacing: -0.25px;
  line-height: normal;
`;

const Ul2 = styled.div`
  position: relative;
  min-width: 453px;
  height: 28px;
`;

const FlexRow1 = styled.div`
  ${InterNormalBlack17px}
  position: relative;
  top: 3px;
  left: 37px;
  display: flex;
  align-items: center;
  min-width: 416px;
`;

const Button1 = styled.div`
  width: 140px;
  height: 30px;
  display: flex;
  gap: 13.5px;
`;

const WhatWeOffer1 = styled.div`
  ${ValignTextMiddle}
  margin-top: 1px;
  width: 115px;
  height: 28px;
  letter-spacing: -0.25px;
  line-height: 28px;
  white-space: nowrap;
`;

const Svg1 = styled.img`
  margin-top: 7px;
  width: 12px;
  height: 12px;
`;

const Learn1 = styled.div`
  ${ValignTextMiddle}
  height: 21px;
  margin-left: 34px;
  margin-bottom: 3px;
  min-width: 45px;
  letter-spacing: -0.25px;
  line-height: normal;
`;

const Network1 = styled.div`
  ${ValignTextMiddle}
  height: 21px;
  margin-left: 33px;
  margin-bottom: 3px;
  min-width: 67px;
  letter-spacing: -0.25px;
  line-height: normal;
`;

const Support1 = styled.div`
  ${ValignTextMiddle}
  height: 21px;
  margin-left: 33px;
  margin-bottom: 3px;
  min-width: 64px;
  letter-spacing: -0.25px;
  line-height: normal;
`;

export default Ul;
