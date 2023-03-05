import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import Button2 from "../Button2";
import Divdivider from "../Divdivider";
import Group2 from "../Group2";
import styled from "styled-components";
import {
  InterMediumWhite17px,
  InterSemiBoldWhite20px,
  InterBoldWhite20px2,
  InterMediumWhite16px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./DoctorLogin.css";

function DoctorLogin(props) {
  const {
    logo1,
    spanText1,
    spanText2,
    line1,
    dknsrrdivgikyjw1,
    welcomeBack,
    setupYourProfileNow,
    newToWeb3,
    doYouAlreadyHaveAWallet,
    spanText3,
    spanText4,
  } = props;

  return (
    <div className="doctor-login screen">
      <Link to="/main">
        <Logo>
          <Logo1 src={logo1} alt="logo 1" />
          <MediKey>
            <span>
              <span className="inter-medium-dawn-pink-17px">{spanText1}</span>
              <span className="inter-bold-web-orange-17px">{spanText2}</span>
            </span>
          </MediKey>
        </Logo>
      </Link>
      <Frame2>
        <FlexCol>
          <OverlapGroup>
            <Line1 src={line1} alt="Line 1" />
            <DkNSrrDIvgIkYjW1 src={dknsrrdivgikyjw1} alt="DkNSrrDIvgIkYjW 1" />
          </OverlapGroup>
          <WelcomeBack>{welcomeBack}</WelcomeBack>
        </FlexCol>
        <Divsetup>
          <SetupYourProfileNow>{setupYourProfileNow}</SetupYourProfileNow>
          <NewToWeb3>{newToWeb3}</NewToWeb3>
          <Button />
          <Button2 />
          <Divdivider />
          <DoYouAlreadyHaveAWallet>{doYouAlreadyHaveAWallet}</DoYouAlreadyHaveAWallet>
          <Button1>
            <Group2 />
          </Button1>
          <Link to="/patient-login">
            <AreYouAPatientContinueHere>
              <span>
                <span className="inter-medium-white-16px">{spanText3}</span>
                <span className="inter-bold-white-16px">{spanText4}</span>
              </span>
            </AreYouAPatientContinueHere>
          </Link>
        </Divsetup>
      </Frame2>
    </div>
  );
}

const Logo = styled.div`
  position: fixed;
  top: 38px;
  left: 55px;
  width: 187px;
  height: 64px;
  z-index: 2;
  display: flex;
  gap: 13px;
  cursor: pointer;
`;

const Logo1 = styled.img`
  margin-top: 9px;
  width: 36px;
  height: 46px;
  margin-left: 25px;
  object-fit: cover;
`;

const MediKey = styled.div`
  ${ValignTextMiddle}
  ${InterMediumWhite17px}
            margin-top: 29px;
  width: 70px;
  height: 21px;
  letter-spacing: -0.25px;
  line-height: normal;
`;

const Frame2 = styled.div`
  position: fixed;
  top: 0;
  left: 58px;
  width: 1454px;
  height: 814px;
  z-index: 1;
  display: flex;
  padding: 73px 193px;
  align-items: flex-start;
  gap: 264px;
`;

const FlexCol = styled.div`
  width: 391px;
  margin-left: 41px;
  margin-top: 38px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 492px;
  gap: 56px;
`;

const OverlapGroup = styled.div`
  width: 391px;
  height: 408px;
  position: relative;
`;

const Line1 = styled.img`
  position: absolute;
  width: 45px;
  height: 85px;
  top: 70px;
  left: 8px;
`;

const DkNSrrDIvgIkYjW1 = styled.img`
  position: absolute;
  width: 391px;
  height: 408px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const WelcomeBack = styled.div`
  ${ValignTextMiddle}
  ${InterSemiBoldWhite20px}
            width: 291px;
  height: 28px;
  text-align: center;
  letter-spacing: 2px;
  line-height: 28px;
  white-space: nowrap;
`;

const Divsetup = styled.div`
  width: 372px;
  height: 632px;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 50px;
  background: linear-gradient(
    180deg,
    rgb(0, 63.000000044703484, 92.00000211596489) 0%,
    rgba(0.9999999403953552, 30.999992452561855, 45.00000111758709, 0) 100%
  );
`;

const SetupYourProfileNow = styled.div`
  ${ValignTextMiddle}
  ${InterBoldWhite20px2}
            margin-left: 61px;
  width: 250px;
  height: 33px;
  margin-top: 50px;
  text-align: center;
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
`;

const NewToWeb3 = styled.div`
  ${ValignTextMiddle}
  ${InterMediumWhite16px}
            margin-left: 126px;
  width: 120px;
  height: 28px;
  margin-top: 15px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const DoYouAlreadyHaveAWallet = styled.p`
  ${ValignTextMiddle}
  ${InterMediumWhite16px}
            margin-left: 55px;
  width: 263px;
  height: 27px;
  margin-top: 21px;
  text-align: center;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Button1 = styled.div`
  margin-left: 1px;
  height: 51px;
  width: 215px;
  align-self: center;
  position: relative;
  margin-top: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background: linear-gradient(
    180deg,
    rgb(255, 99.00000169873238, 97.00000181794167) 0%,
    rgb(255, 166.0000205039978, 0) 100%
  );
`;

const AreYouAPatientContinueHere = styled.p`
  ${ValignTextMiddle}
  ${InterMediumWhite16px}
            margin-left: 49px;
  width: 273px;
  height: 45px;
  margin-top: 43px;
  text-align: center;
  letter-spacing: 0;
  line-height: 28px;
  cursor: pointer;
`;

export default DoctorLogin;
