import React from "react";
import styled from "styled-components";
import { InterBoldDaintree16px, ValignTextMiddle } from "../../styledMixins";


function Group2() {
  return (
    <Group21>
      <ConnectYourWallet>Connect your wallet</ConnectYourWallet>
      <Svg src="/img/svg-2@2x.png" alt="svg" />
    </Group21>
  );
}

const Group21 = styled.div`
  margin-top: 1px;
  margin-left: 2px;
  display: flex;
  align-items: center;
  min-width: 177px;
  gap: 6px;
`;

const ConnectYourWallet = styled.div`
  ${ValignTextMiddle}
  ${InterBoldDaintree16px}
            height: 28px;
  min-width: 153px;
  text-align: center;
  letter-spacing: -0.25px;
  line-height: 28px;
  white-space: nowrap;
`;

const Svg = styled.img`
  width: 16px;
  height: 16px;
`;

const Group22 = styled.div`
  margin-top: 1px;
  margin-left: 2px;
  display: flex;
  align-items: center;
  min-width: 177px;
  gap: 6px;
`;

const ConnectYourWallet1 = styled.div`
  ${ValignTextMiddle}
  ${InterBoldDaintree16px}
            height: 28px;
  min-width: 153px;
  text-align: center;
  letter-spacing: -0.25px;
  line-height: 28px;
  white-space: nowrap;
`;

const Svg1 = styled.img`
  width: 16px;
  height: 16px;
`;

export default Group2;
