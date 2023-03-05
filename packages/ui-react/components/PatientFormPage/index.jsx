import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { InterMediumWhite17px, InterBoldWhite16px, InterBoldDaintree16px, ValignTextMiddle } from "../../styledMixins";
import "./PatientFormPage.css";

function PatientFormPage(props) {
  const {
    logo1,
    spanText1,
    spanText2,
    hiJaneDoe,
    logOut,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    spanText10,
    spanText11,
    spanText12,
    rectangle4,
    xcontinue,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="patient-form-page screen">
        <FlexRow>
          <Link to="/main" className="align-self-flex-end">
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
          <HiJaneDoe>{hiJaneDoe}</HiJaneDoe>
          <Link to="/main" className="align-self-flex-center">
            <A>
              <LogOut>{logOut}</LogOut>
            </A>
          </Link>
        </FlexRow>
        <OverlapGroup1>
          <OverlapGroup>
            <PersonalInformation>
              <span>
                <span className="inter-bold-web-orange-30px">{spanText3}</span>
                <span className="inter-bold-cultured-pearl-30px">{spanText4}</span>
                <span className="inter-medium-cultured-pearl-30px">{spanText5}</span>
                <span className="inter-bold-cultured-pearl-30px">{spanText6}</span>
                <span className="inter-bold-web-orange-30px">{spanText7}</span>
                <span className="inter-bold-cultured-pearl-30px">{spanText8}</span>
                <span className="inter-medium-cultured-pearl-30px">{spanText9}</span>
                <span className="inter-bold-cultured-pearl-30px">{spanText10}</span>
                <span className="inter-bold-web-orange-30px">{spanText11}</span>
                <span className="inter-medium-cultured-pearl-30px">{spanText12}</span>
              </span>
            </PersonalInformation>
            <Rectangle1></Rectangle1>
            <Rectangle3></Rectangle3>
            <Rectangle6></Rectangle6>
            <Rectangle7></Rectangle7>
            <Rectangle8></Rectangle8>
            <Rectangle9></Rectangle9>
            <Rectangle10></Rectangle10>
            <Rectangle11></Rectangle11>
            <Rectangle12></Rectangle12>
            <Rectangle4 src={rectangle4} alt="Rectangle 4" />
            <Rectangle13></Rectangle13>
            <Rectangle5></Rectangle5>
            <Rectangle2></Rectangle2>
          </OverlapGroup>
          <Link to="/patient-dashboard">
            <A1>
              <Continue>{xcontinue}</Continue>
            </A1>
          </Link>
        </OverlapGroup1>
      </div>
    </div>
  );
}

const FlexRow = styled.div`
  height: 65px;
  display: flex;
  align-items: flex-start;
  min-width: 1409px;
`;

const Logo = styled.div`
  width: 187px;
  height: 64px;
  align-self: flex-end;
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

const HiJaneDoe = styled.div`
  ${ValignTextMiddle}
  ${InterBoldWhite16px}
            width: 128px;
  height: 61px;
  margin-left: 953px;
  text-align: center;
  letter-spacing: -0.25px;
  line-height: normal;
`;

const A = styled.div`
  width: 113px;
  height: 44px;
  align-self: center;
  margin-left: 28px;
  margin-bottom: 1px;
  display: flex;
  background-color: var(--white);
  border-radius: 50px;
  overflow: hidden;
  border: 2px solid;
  border-color: transparent;
  border-image: linear-gradient(
      to bottom,
      rgb(255, 166.00000530481339, 0),
      rgb(255, 99.00000169873238, 97.00000181794167)
    )
    1;
  cursor: pointer;
`;

const LogOut = styled.div`
  ${ValignTextMiddle}
  ${InterBoldDaintree16px}
            margin-top: 12px;
  width: 60px;
  height: 19px;
  margin-left: 27px;
  text-align: center;
  letter-spacing: -0.25px;
  line-height: normal;
`;

const OverlapGroup1 = styled.div`
  width: 1384px;
  height: 789px;
  position: relative;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 1360px;
  height: 789px;
  top: 0;
  left: 0;
`;

const PersonalInformation = styled.h1`
  ${ValignTextMiddle}
  position: absolute;
  width: 1228px;
  height: 789px;
  top: 0;
  left: 0;
  font-family: var(--font-family-inter);
  font-weight: 400;
  color: transparent;
  font-size: var(--font-size-xl);
  letter-spacing: -0.25px;
  line-height: normal;
`;

const Rectangle1 = styled.div`
  position: absolute;
  width: 219px;
  height: 26px;
  top: 93px;
  left: 182px;
  background-color: var(--alto);
  border-radius: 10px;
`;

const Rectangle3 = styled.div`
  position: absolute;
  width: 220px;
  height: 26px;
  top: 93px;
  left: 631px;
  background-color: var(--alto);
  border-radius: 10px;
`;

const Rectangle6 = styled.div`
  position: absolute;
  width: 220px;
  height: 26px;
  top: 305px;
  left: 380px;
  background-color: var(--alto);
  border-radius: 10px;
`;

const Rectangle7 = styled.div`
  position: absolute;
  width: 220px;
  height: 26px;
  top: 305px;
  left: 829px;
  background-color: var(--alto);
  border-radius: 10px;
`;

const Rectangle8 = styled.div`
  position: absolute;
  width: 438px;
  height: 26px;
  top: 351px;
  left: 162px;
  background-color: var(--alto);
  border-radius: 10px;
`;

const Rectangle9 = styled.div`
  position: absolute;
  width: 843px;
  height: 26px;
  top: 436px;
  left: 517px;
  background-color: var(--alto);
  border-radius: 10px;
`;

const Rectangle10 = styled.div`
  position: absolute;
  width: 843px;
  height: 26px;
  top: 480px;
  left: 517px;
  background-color: var(--alto);
  border-radius: 10px;
`;

const Rectangle11 = styled.div`
  position: absolute;
  width: 1003px;
  height: 26px;
  top: 524px;
  left: 357px;
  background-color: var(--alto);
  border-radius: 10px;
`;

const Rectangle12 = styled.div`
  position: absolute;
  width: 1003px;
  height: 26px;
  top: 568px;
  left: 357px;
  background-color: var(--alto);
  border-radius: 10px;
`;

const Rectangle4 = styled.img`
  position: absolute;
  width: 184px;
  height: 26px;
  top: 93px;
  left: 1176px;
`;

const Rectangle13 = styled.div`
  position: absolute;
  width: 220px;
  height: 26px;
  top: 725px;
  left: 38px;
  background-color: var(--alto);
  border-radius: 10px;
`;

const Rectangle5 = styled.div`
  position: absolute;
  width: 220px;
  height: 26px;
  top: 134px;
  left: 741px;
  background-color: var(--alto);
  border-radius: 10px;
`;

const Rectangle2 = styled.div`
  position: absolute;
  width: 260px;
  height: 26px;
  top: 134px;
  left: 141px;
  background-color: var(--alto);
  border-radius: 10px;
`;

const A1 = styled.div`
  position: absolute;
  width: 111px;
  height: 44px;
  top: 729px;
  left: 1273px;
  display: flex;
  background-color: var(--white);
  border-radius: 50px;
  overflow: hidden;
  border: 2px solid;
  border-color: transparent;
  border-image: linear-gradient(
      to bottom,
      rgb(255, 166.00000530481339, 0),
      rgb(255, 99.00000169873238, 97.00000181794167)
    )
    1;
  cursor: pointer;
`;

const Continue = styled.div`
  ${ValignTextMiddle}
  ${InterBoldDaintree16px}
            margin-top: 12px;
  width: 71px;
  height: 19px;
  margin-left: 22px;
  text-align: center;
  letter-spacing: -0.25px;
  line-height: normal;
`;

export default PatientFormPage;
