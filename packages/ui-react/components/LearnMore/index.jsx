import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import Ul from "../Ul";
import styled from "styled-components";
import { InterMediumWhite24px2, InterBoldBlack16px, InterBoldWhite15px, ValignTextMiddle } from "../../styledMixins";
import "./LearnMore.css";

function LearnMore(props) {
  const {
    signIn,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    whatIsMedikeyDiscoverTheFutureOfHea,
    maxboroqogozwka1,
    maxboroqogozwka2,
    maxboroqogozwka3,
    secureAccessible,
    spanText10,
    spanText11,
    spanText12,
    spanText13,
    spanText14,
    spanText15,
    spanText16,
    spanText17,
    spanText18,
    spanText19,
    theInnerWorkingsOfMedikeyFromWearab,
    place,
    logoProps,
    ulProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="learn-more screen">
        <Nav>
          <Div>
            <Logo logo1={logoProps.logo1} />
            <Div1>
              <Ul svg={ulProps.svg} />
            </Div1>
            <Link to="/patient-login">
              <A>
                <SignIn>{signIn}</SignIn>
              </A>
            </Link>
          </Div>
        </Nav>
        <OverlapGroup1>
          <Top>
            <Div2>
              <OverlapGroup>
                <Div3>
                  <MediKeyUtilizesBlo>
                    <span>
                      <span className="inter-medium-white-24px">{spanText1}</span>
                      <span className="inter-bold-web-orange-24px">{spanText2}</span>
                      <span className="inter-normal-white-24px">{spanText3}</span>
                      <span className="inter-medium-white-24px">{spanText4}</span>
                      <span className="inter-bold-web-orange-24px">{spanText5}</span>
                      <span className="inter-normal-white-24px">{spanText6}</span>
                      <span className="inter-medium-white-24px">{spanText7}</span>
                      <span className="inter-bold-web-orange-24px">{spanText8}</span>
                      <span className="inter-normal-white-24px">{spanText9}</span>
                    </span>
                  </MediKeyUtilizesBlo>
                </Div3>
                <WhatIsMediKeyDiscoverTheFutureOfHea
                  src={whatIsMedikeyDiscoverTheFutureOfHea}
                  alt="What is MediKey? Discover the Future of Healthcare"
                />
              </OverlapGroup>
            </Div2>
          </Top>
          <MaxboRoQOGoZWkA1 src={maxboroqogozwka1} alt="maxboRoQOGoZWkA 1" />
          <MaxboRoQOGoZWkA2 src={maxboroqogozwka2} alt="maxboRoQOGoZWkA 2" />
          <MaxboRoQOGoZWkA3 src={maxboroqogozwka3} alt="maxboRoQOGoZWkA 3" />
        </OverlapGroup1>
        <Middle>
          <Div4>
            <SecureAccessible>{secureAccessible}</SecureAccessible>
            <Div5>
              <WithMediKeyPatien>
                <span>
                  <span className="inter-medium-white-24px">{spanText10}</span>
                  <span className="inter-medium-falu-red-24px">{spanText11}</span>
                  <span className="inter-medium-red-stage-24px">{spanText12}</span>
                  <span className="inter-medium-white-24px">{spanText13}</span>
                  <span className="inter-medium-falu-red-24px">{spanText14}</span>
                  <span className="inter-medium-red-stage-24px">{spanText15}</span>
                  <span className="inter-medium-white-24px">{spanText16}</span>
                  <span className="inter-medium-falu-red-24px">{spanText17}</span>
                  <span className="inter-medium-red-stage-24px">{spanText18}</span>
                  <span className="inter-medium-white-24px">{spanText19}</span>
                </span>
              </WithMediKeyPatien>
            </Div5>
          </Div4>
        </Middle>
        <Bottom>
          <OverlapGroup2>
            <Div6>
              <Div7>
                <MediKeyCollectsAnd>
                  MediKey collects and securely stores patient data from various wearable devices and integrates with
                  existing doctor networks across state lines. The platform leverages blockchain technology to ensure
                  that patient data is tamper-proof, encrypted and password protected, providing patients with peace of
                  mind and doctors with real-time updates. MediKey enables expedient communication of healthcare needs,
                  which is especially important for patients with chronic conditions who require regular monitoring.
                  With MediKey, patients can receive quality medical care from anywhere in the world.
                  <br />
                  <br />
                  With MediKey&#39;s Insight feature, you can get a comprehensive view of your patient&#39;s health
                  data. From blood pressure to sleep patterns, our platform securely transmits and organizes all the
                  information you need to make informed treatment decisions. <br />
                  Need a second opinion? Collaborate with your team members more efficiently with MediKey&#39;s
                  Collaborate. Our platform allows you to securely share patient data with other healthcare providers,
                  enabling you to work together to provide the best care possible.
                </MediKeyCollectsAnd>
              </Div7>
            </Div6>
            <TheInnerWorkingsOfMediKeyFromWearab
              src={theInnerWorkingsOfMedikeyFromWearab}
              alt="The Inner Workings of MediKey From Wearable Devices to Doctor Networks"
            />
          </OverlapGroup2>
          <Link to="/main">
            <A1>
              <Place>{place}</Place>
            </A1>
          </Link>
        </Bottom>
      </div>
    </div>
  );
}

const Nav = styled.div`
  width: 1512px;
  display: flex;
  background-color: var(--white);
`;

const Div = styled.div`
  width: 1512px;
  height: 108px;
  position: relative;
  display: flex;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-color: var(--black);
`;

const Div1 = styled.div`
  display: flex;
  height: 64px;
  width: 454px;
  align-self: center;
  position: relative;
  margin-left: 17px;
  align-items: flex-start;
  padding: 18px 0px 18px 1px;
  border-left-width: 1px;
  border-left-style: solid;
  border-color: var(--black);
`;

const A = styled.div`
  margin-top: 31px;
  width: 102px;
  height: 44px;
  margin-left: 712px;
  display: flex;
  background-color: var(--white);
  border-radius: 50px;
  overflow: hidden;
  border: 1px solid;
  border-color: var(--black);
  cursor: pointer;
`;

const SignIn = styled.div`
  ${ValignTextMiddle}
  ${InterBoldBlack16px}
            margin-top: 12px;
  width: 52px;
  height: 19px;
  margin-left: 25px;
  text-align: center;
  letter-spacing: -0.25px;
  line-height: normal;
`;

const OverlapGroup1 = styled.div`
  width: 1512px;
  height: 801px;
  position: relative;
`;

const Top = styled.div`
  position: absolute;
  width: 1512px;
  height: 801px;
  top: 0;
  left: 0;
  display: flex;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-color: var(--black);
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgb(0.9999999403953552, 30.999992452561855, 45.00000111758709) 0%,
    rgb(1.0000000591389835, 62.00000010430813, 91.00000217556953) 100%
  );
`;

const Div2 = styled.div`
  height: 740px;
  flex: 1;
  display: flex;
  padding: 97px 81px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 100%;
`;

const OverlapGroup = styled.div`
  width: 648px;
  height: 468px;
  position: relative;
`;

const Div3 = styled.div`
  position: absolute;
  width: 450px;
  height: 468px;
  top: 0;
  left: 0;
  display: flex;
`;

const MediKeyUtilizesBlo = styled.p`
  ${ValignTextMiddle}
  ${InterMediumWhite24px2}
            margin-top: 225px;
  width: 614px;
  height: 361px;
  letter-spacing: 0;
  line-height: 36px;
`;

const WhatIsMediKeyDiscoverTheFutureOfHea = styled.img`
  position: absolute;
  width: 648px;
  height: 109px;
  top: 52px;
  left: 0;
`;

const MaxboRoQOGoZWkA1 = styled.img`
  position: absolute;
  width: 264px;
  height: 292px;
  top: 97px;
  left: 108px;
  object-fit: cover;
`;

const MaxboRoQOGoZWkA2 = styled.img`
  position: absolute;
  width: 264px;
  height: 293px;
  top: 153px;
  left: 391px;
  object-fit: cover;
`;

const MaxboRoQOGoZWkA3 = styled.img`
  position: absolute;
  width: 264px;
  height: 292px;
  top: 400px;
  left: 215px;
  object-fit: cover;
`;

const Middle = styled.div`
  display: flex;
  position: relative;
  margin-top: 1px;
  flex-direction: column;
  width: 1512px;
  height: 515px;
  align-items: flex-start;
  padding: 50px 0px 99px;
  background: linear-gradient(
    180deg,
    rgb(255, 176.90625607967377, 98.81249696016312) 0%,
    rgba(255, 166.0000205039978, 0, 0.5799999833106995) 44.99611258506775%,
    rgba(236.62822902202606, 143.46859753131866, 0, 0.7255875468254089) 67.1875%,
    rgb(202.00000315904617, 101.00000157952309, 0) 100%
  );
`;

const Div4 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 1512px;
  height: 10px;
`;

const SecureAccessible = styled.h1`
  ${ValignTextMiddle}
  margin-left: 77px;
  width: 1298px;
  height: 75px;
  margin-top: 50px;
  font-family: var(--font-family-inter);
  font-weight: 700;
  color: var(--red-stage);
  font-size: 60px;
  letter-spacing: 0;
  line-height: 75px;
  white-space: nowrap;
`;

const Div5 = styled.div`
  width: 1512px;
  height: 304px;
  display: flex;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;

const WithMediKeyPatien = styled.p`
  ${ValignTextMiddle}
  ${InterMediumWhite24px2}
            margin-top: 44px;
  width: 1317px;
  height: 216px;
  margin-left: 78px;
  text-shadow: 0px 4px 4px #00000040;
  letter-spacing: 0;
  line-height: 36px;
`;

const Bottom = styled.div`
  width: 1512px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 917px;
  gap: 33px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-color: var(--black);
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgb(0.9999999403953552, 30.999992452561855, 45.00000111758709) 0%,
    rgb(1.0000000591389835, 62.00000010430813, 91.00000217556953) 100%
  );
`;

const OverlapGroup2 = styled.div`
  width: 1512px;
  height: 740px;
  position: relative;
`;

const Div6 = styled.div`
  position: absolute;
  width: 1512px;
  height: 740px;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
`;

const Div7 = styled.div`
  margin-top: 76px;
  height: 468px;
  margin-left: 147px;
  margin-right: 915px;
  flex: 1;
  display: flex;
`;

const MediKeyCollectsAnd = styled.p`
  ${ValignTextMiddle}
  margin-top: 146px;
  width: 1248px;
  height: 347px;
  font-family: var(--font-family-inter);
  font-weight: 400;
  color: transparent;
  font-size: var(--font-size-m);
  letter-spacing: 0;
  line-height: 20px;
`;

const TheInnerWorkingsOfMediKeyFromWearab = styled.img`
  position: absolute;
  width: 827px;
  height: 109px;
  top: 139px;
  left: 145px;
`;

const A1 = styled.div`
  display: flex;
  position: relative;
  margin-right: 159.09px;
  width: fit-content;
  align-items: flex-start;
  padding: 14px 25.90625px 14px 26px;
  border-radius: 40px;
  border: 1px solid;
  border-color: var(--white);
  cursor: pointer;
`;

const Place = styled.div`
  ${ValignTextMiddle}
  ${InterBoldWhite15px}
            position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

export default LearnMore;
