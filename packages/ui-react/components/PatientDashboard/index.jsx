import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  InterMediumWhite17px,
  InterBoldWhite16px,
  InterMediumWhite50px,
  InterBoldDaintree16px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./PatientDashboard.css";

function PatientDashboard(props) {
  const {
    logo1,
    spanText1,
    spanText2,
    hiJaneDoe,
    logOut,
    overlapGroup,
    title,
    line2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    spanText10,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="patient-dashboard screen">
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
        <OverlapGroup style={{ backgroundImage: `url(${overlapGroup})` }}>
          <Title>{title}</Title>
          <Line2 src={line2} alt="Line 2" />
          <FlexRow1>
            <HeartRateSharing>
              <span>
                <span className="inter-medium-black-50px">{spanText3}</span>
                <span className="inter-medium-astronaut-blue-30px">{spanText4}</span>
              </span>
            </HeartRateSharing>
            <Group3>
              <Ellipse3></Ellipse3>
            </Group3>
          </FlexRow1>
          <FlexRow2>
            <DailyWalkingDistanceSharing>
              <span>
                <span className="inter-medium-black-50px">{spanText5}</span>
                <span className="inter-medium-astronaut-blue-30px">{spanText6}</span>
              </span>
            </DailyWalkingDistanceSharing>
            <Group4>
              <Ellipse3></Ellipse3>
            </Group4>
          </FlexRow2>
          <FlexRow3>
            <BloodPressureNotSharing>
              <span>
                <span className="inter-medium-black-50px">{spanText7}</span>
                <span className="inter-medium-astronaut-blue-30px">{spanText8}</span>
              </span>
            </BloodPressureNotSharing>
            <Group5>
              <Ellipse31></Ellipse31>
            </Group5>
          </FlexRow3>
          <FlexRow4>
            <DailyWalkingDistanceSharing>
              <span>
                <span className="inter-medium-black-50px">{spanText9}</span>
                <span className="inter-medium-astronaut-blue-30px">{spanText10}</span>
              </span>
            </DailyWalkingDistanceSharing>
            <Group3>
              <Ellipse3></Ellipse3>
            </Group3>
          </FlexRow4>
        </OverlapGroup>
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

const OverlapGroup = styled.div`
  width: 1323px;
  margin-right: 46px;
  display: flex;
  flex-direction: column;
  padding: 54px 0;
  align-items: center;
  min-height: 671px;
  background-size: 100% 100%;
`;

const Title = styled.h1`
  ${ValignTextMiddle}
  width: 357px;
  height: 61px;
  align-self: flex-start;
  margin-left: 105px;
  background: linear-gradient(
    180deg,
    rgb(255, 166.00000530481339, 0) 0%,
    rgb(255, 99.00000169873238, 97.00000181794167) 100%
  );
  -webkit-background-clip: text !important;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  font-family: var(--font-family-inter);
  font-weight: 700;
  color: transparent;
  font-size: var(--font-size-xxxl);
  letter-spacing: -0.25px;
  line-height: normal;
`;

const Line2 = styled.img`
  width: 1323px;
  height: 2px;
  margin-top: 48px;
  object-fit: cover;
`;

const FlexRow1 = styled.div`
  height: 76px;
  margin-top: 43px;
  margin-right: 3px;
  display: flex;
  align-items: flex-start;
  min-width: 1112px;
  gap: 141px;
`;

const HeartRateSharing = styled.p`
  ${ValignTextMiddle}
  ${InterMediumWhite50px}
            height: 61px;
  min-width: 829px;
  letter-spacing: -0.25px;
  line-height: normal;
`;

const Group3 = styled.div`
  width: 142px;
  height: 75px;
  align-self: flex-end;
  display: flex;
  background-color: var(--screamin-green);
  border-radius: 300px;
  box-shadow: inset 0px 4px 4px #00000040;
`;

const Ellipse3 = styled.div`
  flex: 1;
  width: 71px;
  border-radius: 35.5px/36.95px;
  background: linear-gradient(
    180deg,
    rgb(255, 255, 255) 0%,
    rgb(217.0000022649765, 217.0000022649765, 217.0000022649765) 100%
  );
`;

const FlexRow2 = styled.div`
  margin-top: 36px;
  margin-right: 2px;
  display: flex;
  align-items: flex-start;
  min-width: 1111px;
  gap: 138px;
`;

const DailyWalkingDistanceSharing = styled.p`
  ${ValignTextMiddle}
  ${InterMediumWhite50px}
            height: 61px;
  min-width: 831px;
  letter-spacing: -0.25px;
  line-height: normal;
`;

const Group4 = styled.div`
  width: 142px;
  height: 75px;
  display: flex;
  background-color: var(--screamin-green);
  border-radius: 300px;
  box-shadow: inset 0px 4px 4px #00000040;
`;

const FlexRow3 = styled.div`
  height: 81px;
  margin-top: 30px;
  margin-right: 3px;
  display: flex;
  align-items: flex-start;
  min-width: 1112px;
  gap: 138px;
`;

const BloodPressureNotSharing = styled.p`
  ${ValignTextMiddle}
  ${InterMediumWhite50px}
            height: 61px;
  min-width: 832px;
  letter-spacing: -0.25px;
  line-height: normal;
`;

const Group5 = styled.div`
  height: 75px;
  align-self: flex-end;
  display: flex;
  padding: 0.1px 0;
  align-items: flex-end;
  min-width: 142px;
  background-color: var(--alto);
  border-radius: 300px;
  box-shadow: inset 0px 4px 4px #00000040;
`;

const Ellipse31 = styled.div`
  width: 71px;
  height: 74px;
  border-radius: 35.5px/36.95px;
  background: linear-gradient(
    180deg,
    rgb(255, 255, 255) 0%,
    rgb(217.0000022649765, 217.0000022649765, 217.0000022649765) 100%
  );
`;

const FlexRow4 = styled.div`
  height: 80px;
  margin-top: 31px;
  margin-right: 3px;
  display: flex;
  align-items: flex-start;
  min-width: 1112px;
  gap: 139px;
`;

export default PatientDashboard;
