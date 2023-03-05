import React from "react";
import styled from "styled-components";
import { InterBoldBlack17px, ValignTextMiddle } from "../../styledMixins";


function Logo(props) {
  const { logo1 } = props;

  return (
    <Logo1>
      <Logo11 src={logo1} alt="logo 1" />
      <MediKey>MediKey</MediKey>
    </Logo1>
  );
}

const Logo1 = styled.div`
  margin-top: 19px;
  width: 187px;
  height: 64px;
  display: flex;
  gap: 26px;
`;

const Logo11 = styled.img`
  margin-top: 10px;
  width: 36px;
  height: 46px;
  margin-left: 43px;
  object-fit: cover;
`;

const MediKey = styled.div`
  ${ValignTextMiddle}
  ${InterBoldBlack17px}
            margin-top: 27px;
  width: 71px;
  height: 21px;
  letter-spacing: -0.25px;
  line-height: normal;
`;

const Logo2 = styled.div`
  margin-top: 19px;
  width: 187px;
  height: 64px;
  display: flex;
  gap: 26px;
`;

const Logo12 = styled.img`
  margin-top: 10px;
  width: 36px;
  height: 46px;
  margin-left: 43px;
  object-fit: cover;
`;

const MediKey1 = styled.div`
  ${ValignTextMiddle}
  ${InterBoldBlack17px}
            margin-top: 27px;
  width: 71px;
  height: 21px;
  letter-spacing: -0.25px;
  line-height: normal;
`;

export default Logo;
