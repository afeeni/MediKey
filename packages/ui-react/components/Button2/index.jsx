import React from "react";
import styled from "styled-components";
import { InterBoldDaintree16px, ValignTextMiddle } from "../../styledMixins";


function Button2() {
  return (
    <Button>
      <ContinueWithGoogle>Continue with Google</ContinueWithGoogle>
    </Button>
  );
}

const Button = styled.div`
  margin-left: 1px;
  height: 51px;
  width: 215px;
  align-self: center;
  margin-top: 21px;
  display: flex;
  border-radius: 50px;
  background: linear-gradient(
    180deg,
    rgb(255, 99.00000169873238, 97.00000181794167) 0%,
    rgb(255, 166.0000205039978, 0) 100%
  );
`;

const ContinueWithGoogle = styled.div`
  ${ValignTextMiddle}
  ${InterBoldDaintree16px}
            margin-top: 12px;
  width: 165px;
  height: 28px;
  margin-left: 25px;
  text-align: center;
  letter-spacing: -0.25px;
  line-height: 28px;
  white-space: nowrap;
`;

const Button1 = styled.div`
  margin-left: 1px;
  height: 51px;
  width: 215px;
  align-self: center;
  margin-top: 21px;
  display: flex;
  border-radius: 50px;
  background: linear-gradient(
    180deg,
    rgb(255, 99.00000169873238, 97.00000181794167) 0%,
    rgb(255, 166.0000205039978, 0) 100%
  );
`;

const ContinueWithGoogle1 = styled.div`
  ${ValignTextMiddle}
  ${InterBoldDaintree16px}
            margin-top: 12px;
  width: 165px;
  height: 28px;
  margin-left: 25px;
  text-align: center;
  letter-spacing: -0.25px;
  line-height: 28px;
  white-space: nowrap;
`;

export default Button2;
