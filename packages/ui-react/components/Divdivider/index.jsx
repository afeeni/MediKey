import React from "react";
import styled from "styled-components";
import { InterMediumDawnPink14px, ValignTextMiddle } from "../../styledMixins";


function Divdivider() {
  return (
    <Divdivider1>
      <Div></Div>
      <Or>or</Or>
      <Div1></Div1>
    </Divdivider1>
  );
}

const Divdivider1 = styled.div`
  height: 28px;
  width: 296px;
  align-self: center;
  margin-top: 21px;
  display: flex;
`;

const Div = styled.div`
  height: 2px;
  width: 133.1875px;
  align-self: center;
  background-color: var(--web-orange);
  border-radius: 8px;
`;

const Or = styled.div`
  ${ValignTextMiddle}
  ${InterMediumDawnPink14px}
            margin-top: 1px;
  width: 14.824999809265137px;
  height: 22px;
  margin-left: 7.8px;
  text-align: center;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const Div1 = styled.div`
  margin-top: 2px;
  height: 2px;
  width: 133.1875px;
  align-self: center;
  margin-left: 7.2px;
  background-color: var(--web-orange);
  border-radius: 8px;
`;

const Divdivider2 = styled.div`
  height: 28px;
  width: 296px;
  align-self: center;
  margin-top: 21px;
  display: flex;
`;

const Div2 = styled.div`
  height: 2px;
  width: 133.1875px;
  align-self: center;
  background-color: var(--web-orange);
  border-radius: 8px;
`;

const Or1 = styled.div`
  ${ValignTextMiddle}
  ${InterMediumDawnPink14px}
            margin-top: 1px;
  width: 14.824999809265137px;
  height: 22px;
  margin-left: 7.8px;
  text-align: center;
  letter-spacing: 0;
  line-height: 22px;
  white-space: nowrap;
`;

const Div3 = styled.div`
  margin-top: 2px;
  height: 2px;
  width: 133.1875px;
  align-self: center;
  margin-left: 7.2px;
  background-color: var(--web-orange);
  border-radius: 8px;
`;

export default Divdivider;
