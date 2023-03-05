import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import Ul from "../Ul";
import styled from "styled-components";
import { ValignTextMiddle, InterNormalBlack32px, InterBoldWhite15px, InterBoldBlack16px } from "../../styledMixins";
import "./Main.css";

function Main(props) {
  const {
    medikey,
    logo2,
    learnMore1,
    poweringTheFuture,
    maxboroqogozwka1,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    learnMore2,
    remotePatientMonit,
    signIn,
    title,
    div1,
    withDecentralizedA,
    div2,
    unlockTheFullPote,
    div3,
    weUseBlockchainTo,
    logoProps,
    ulProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="main screen">
        <OverlapGroup1>
          <Div>
            <Div1>
              <Frame1>
                <MediKey src={medikey} alt="MediKey" />
                <Logo2 src={logo2} alt="logo 2" />
              </Frame1>
            </Div1>
            <Div2>
              <Div3>
                <OverlapGroup>
                  <Link to="/learn-more">
                    <A></A>
                  </Link>
                  <LearnMore>{learnMore1}</LearnMore>
                </OverlapGroup>
              </Div3>
            </Div2>
          </Div>
          <Div4>
            <PoweringTheFuture>{poweringTheFuture}</PoweringTheFuture>
            <Div5>
              <Div6>
                <MaxboRoQOGoZWkA1 src={maxboroqogozwka1} alt="maxboRoQOGoZWkA 1" />
                <OverlapGroup2>
                  <Div7>
                    <WithMediKeysInsig>
                      <span>
                        <span className="inter-normal-white-20px">{spanText1}</span>
                        <span className="inter-bold-web-orange-20px">{spanText2}</span>
                        <span className="inter-normal-white-20px">{spanText3}</span>
                        <span className="inter-bold-white-20px">{spanText4}</span>
                        <span className="inter-normal-white-20px">{spanText5}</span>
                        <span className="inter-bold-web-orange-20px">{spanText6}</span>
                        <span className="inter-normal-white-20px">{spanText7}</span>
                        <span className="inter-bold-white-20px">{spanText8}</span>
                        <span className="inter-normal-white-20px">{spanText9}</span>
                      </span>
                    </WithMediKeysInsig>
                    <Link to="/learn-more">
                      <A1>
                        <LearnMore1>{learnMore2}</LearnMore1>
                      </A1>
                    </Link>
                  </Div7>
                  <RemotePatientMonit>{remotePatientMonit}</RemotePatientMonit>
                </OverlapGroup2>
              </Div6>
            </Div5>
          </Div4>
          <Nav>
            <Div8>
              <Logo logo1={logoProps.logo1} />
              <Link to="/learn-more">
                <Div9>
                  <Ul svg={ulProps.svg} />
                </Div9>
              </Link>
              <Link to="/patient-login">
                <A2>
                  <SignIn>{signIn}</SignIn>
                </A2>
              </Link>
            </Div8>
          </Nav>
          <Div10>
            <Div11>
              <Title>{title}</Title>
              <Div12>
                <ScrollHorizontalTarjetas>
                  <Div13>
                    <Div14 style={{ backgroundImage: `url(${div1})` }}></Div14>
                    <Div15>
                      <WithDecentralizedA>{withDecentralizedA}</WithDecentralizedA>
                    </Div15>
                  </Div13>
                  <Div16>
                    <Div14 style={{ backgroundImage: `url(${div2})` }}></Div14>
                    <Div15>
                      <UnlockTheFullPote>{unlockTheFullPote}</UnlockTheFullPote>
                    </Div15>
                  </Div16>
                  <Div16>
                    <Div14 style={{ backgroundImage: `url(${div3})` }}></Div14>
                    <Div15>
                      <WeUseBlockchainTo>{weUseBlockchainTo}</WeUseBlockchainTo>
                    </Div15>
                  </Div16>
                </ScrollHorizontalTarjetas>
              </Div12>
            </Div11>
          </Div10>
        </OverlapGroup1>
      </div>
    </div>
  );
}

const OverlapGroup1 = styled.div`
  width: 1512px;
  height: 2990px;
  position: relative;
  margin-top: 0.5px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 1512px;
  height: 1151px;
  align-items: flex-start;
  position: absolute;
  top: 108px;
  left: 0;
  background: linear-gradient(
    180deg,
    rgb(0, 63.000000044703484, 92.00000211596489) 0%,
    rgb(1.0000000591389835, 31.000000052154064, 45.00000111758709) 100%
  );
`;

const Div1 = styled.div`
  position: relative;
  display: flex;
  min-width: 1512px;
  height: 761.046875px;
`;

const Frame1 = styled.div`
  margin-top: 219px;
  width: 1512px;
  height: 495px;
  display: flex;
  gap: 50px;
`;

const MediKey = styled.img`
  margin-top: 57px;
  width: 1026px;
  height: 320px;
  margin-left: 84px;
`;

const Logo2 = styled.img`
  width: 240px;
  height: 304px;
  object-fit: cover;
`;

const Div2 = styled.div`
  display: flex;
  width: 1517px;
  height: 345px;
  align-items: flex-start;
  position: relative;
  margin-right: -5px;
  overflow: hidden;
`;

const Div3 = styled.div`
  position: relative;
  min-width: 1512px;
  height: 406px;
  margin-bottom: -61px;
`;

const OverlapGroup = styled.div`
  position: relative;
  width: 231px;
  height: 57px;
  top: 244px;
  left: 641px;
  border-radius: 50px;
`;

const A = styled.div`
  position: absolute;
  width: 231px;
  height: 57px;
  top: 0;
  left: 0;
  border-radius: 50px;
  background: linear-gradient(
    180deg,
    rgb(255, 166.00000530481339, 0) 0%,
    rgb(255, 98.99999409914017, 97.00000941753387) 100%
  );
  cursor: pointer;
`;

const LearnMore = styled.div`
  ${ValignTextMiddle}
  position: absolute;
  height: 28px;
  top: 14px;
  left: 72px;
  font-family: var(--font-family-inter);
  font-weight: 700;
  color: #18112d;
  font-size: var(--font-size-xs);
  text-align: center;
  letter-spacing: -0.25px;
  line-height: 28px;
  white-space: nowrap;
`;

const Div4 = styled.div`
  position: absolute;
  width: 1512px;
  height: 2963px;
  top: 27px;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 1211px;
`;

const PoweringTheFuture = styled.p`
  ${ValignTextMiddle}
  margin-left: 235px;
  width: 1042px;
  height: 160px;
  margin-top: 791px;
  font-family: var(--font-family-inter);
  font-weight: 500;
  color: #ff8b26;
  font-size: 69px;
  text-align: center;
  letter-spacing: -2px;
  line-height: 80px;
`;

const Div5 = styled.div`
  flex: 1;
  max-height: 801px;
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

const Div6 = styled.div`
  height: 740px;
  flex: 1;
  display: flex;
  padding: 33px 86px;
  justify-content: flex-end;
  align-items: center;
  min-width: 100%;
  gap: 123px;
`;

const MaxboRoQOGoZWkA1 = styled.img`
  width: 547px;
  height: 607px;
  align-self: flex-end;
  object-fit: cover;
`;

const OverlapGroup2 = styled.div`
  width: 648px;
  height: 493px;
  position: relative;
  margin-bottom: 25px;
`;

const Div7 = styled.div`
  position: absolute;
  width: 450px;
  height: 468px;
  top: 25px;
  left: 2px;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const WithMediKeysInsig = styled.p`
  ${ValignTextMiddle}
  margin-left: -2px;
  width: 648px;
  height: 289px;
  margin-top: 154px;
  font-family: var(--font-family-inter);
  font-weight: 400;
  color: transparent;
  font-size: var(--font-size-m);
  letter-spacing: 0;
  line-height: 36px;
`;

const A1 = styled.div`
  display: flex;
  margin-left: -2px;
  width: 134.90625px;
  height: 46px;
  position: relative;
  align-items: flex-start;
  padding: 14px 25.90625px 14px 26px;
  border-radius: 40px;
  border: 1px solid;
  border-color: var(--white);
  cursor: pointer;
`;

const LearnMore1 = styled.div`
  ${ValignTextMiddle}
  ${InterBoldWhite15px}
            position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const RemotePatientMonit = styled.p`
  ${ValignTextMiddle}
  position: absolute;
  width: 648px;
  height: 71px;
  top: 0;
  left: 0;
  font-family: var(--font-family-inter);
  font-weight: 700;
  color: var(--dawn-pink);
  font-size: 45px;
  letter-spacing: 0;
  line-height: 58px;
`;

const Nav = styled.div`
  position: absolute;
  width: 1512px;
  height: 108px;
  top: 0;
  left: 0;
  display: flex;
  background-color: var(--white);
`;

const Div8 = styled.div`
  width: 1512px;
  height: 108px;
  position: relative;
  display: flex;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-color: var(--black);
`;

const Div9 = styled.div`
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
  cursor: pointer;
`;

const A2 = styled.div`
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

const Div10 = styled.div`
  display: flex;
  flex-direction: column;
  width: 1512px;
  height: 929px;
  align-items: flex-start;
  padding: 50px 0px 99px;
  position: absolute;
  top: 1259px;
  left: 0;
  background-color: var(--dawn-pink);
`;

const Div11 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 1512px;
  height: 10px;
`;

const Title = styled.h1`
  ${ValignTextMiddle}
  margin-left: 77px;
  width: 1037px;
  height: 75px;
  margin-top: 50px;
  font-family: var(--font-family-inter);
  font-weight: 700;
  color: var(--black);
  font-size: 70px;
  letter-spacing: 0;
  line-height: 75px;
  white-space: nowrap;
`;

const Div12 = styled.div`
  width: 1512px;
  height: 125px;
  display: flex;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;

const ScrollHorizontalTarjetas = styled.div`
  width: 2708px;
  height: 691px;
  display: flex;
  gap: 30px;
  background-color: var(--dawn-pink);
  overflow-x: scroll;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;

const Div13 = styled.div`
  margin-top: 76px;
  width: 840px;
  height: 580px;
  margin-left: 77px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 25px;
  overflow: hidden;
`;

const Div14 = styled.div`
  width: 840px;
  height: 326px;
  background-size: 100% 100%;
`;

const Div15 = styled.div`
  width: 840px;
  height: 254px;
  display: flex;
  background-color: var(--white);
`;

const WithDecentralizedA = styled.p`
  ${ValignTextMiddle}
  ${InterNormalBlack32px}
            margin-top: 14px;
  width: 771px;
  height: 225px;
  margin-left: 35px;
  letter-spacing: 0;
  line-height: 44px;
`;

const Div16 = styled.div`
  margin-top: 76px;
  width: 840px;
  height: 580px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 25px;
  overflow: hidden;
`;

const UnlockTheFullPote = styled.p`
  ${ValignTextMiddle}
  ${InterNormalBlack32px}
            margin-top: 35px;
  width: 773px;
  height: 184px;
  margin-left: 33px;
  letter-spacing: 0;
  line-height: 44px;
`;

const WeUseBlockchainTo = styled.p`
  ${ValignTextMiddle}
  ${InterNormalBlack32px}
            margin-top: 53px;
  width: 774px;
  height: 148px;
  margin-left: 33px;
  letter-spacing: 0;
  line-height: 44px;
`;

export default Main;
