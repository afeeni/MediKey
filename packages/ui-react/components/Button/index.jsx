import React from "react";
import styled from "styled-components";
import { InterBoldDaintree16px, ValignTextMiddle } from "../../styledMixins";


function Button() {
  return (
    <Button1>
      <ContinueWithEmail>Continue with Email</ContinueWithEmail>
    </Button1>
  );
}

const Button1 = styled.div`
  margin-left: 1px;
  height: 51px;
  width: 215px;
  align-self: center;
  margin-top: 28px;
  display: flex;
  border-radius: 50px;
  background: linear-gradient(
    180deg,
    rgb(255, 99.00000169873238, 97.00000181794167) 0%,
    rgb(255, 166.0000205039978, 0) 100%
  );
`;

const ContinueWithEmail = styled.div`
  ${ValignTextMiddle}
  ${InterBoldDaintree16px}
            margin-top: 12px;
  width: 152px;
  height: 28px;
  margin-left: 32px;
  text-align: center;
  letter-spacing: -0.25px;
  line-height: 28px;
  white-space: nowrap;
`;

const Button2 = styled.div`
  margin-left: 1px;
  height: 51px;
  width: 215px;
  align-self: center;
  margin-top: 28px;
  display: flex;
  border-radius: 50px;
  background: linear-gradient(
    180deg,
    rgb(255, 99.00000169873238, 97.00000181794167) 0%,
    rgb(255, 166.0000205039978, 0) 100%
  );
`;

const ContinueWithEmail1 = styled.div`
  ${ValignTextMiddle}
  ${InterBoldDaintree16px}
            margin-top: 12px;
  width: 152px;
  height: 28px;
  margin-left: 32px;
  text-align: center;
  letter-spacing: -0.25px;
  line-height: 28px;
  white-space: nowrap;
`;

export default Button;
