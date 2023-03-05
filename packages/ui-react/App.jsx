
import { css } from "styled-components";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import PatientDashboard from "./components/PatientDashboard";
import Main from "./components/Main";
import PatientLogin from "./components/PatientLogin";
import PatientFormPage from "./components/PatientFormPage";
import LearnMore from "./components/LearnMore";
import DoctorLogin from "./components/DoctorLogin";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/patient-dashboard">
          <PatientDashboard {...patientDashboardData} />
        </Route>
        <Route path="/:path(|main)">
          <Main {...mainData} />
        </Route>
        <Route path="/patient-login">
          <PatientLogin {...patientLoginData} />
        </Route>
        <Route path="/patient-form-page">
          <PatientFormPage {...patientFormPageData} />
        </Route>
        <Route path="/learn-more">
          <LearnMore {...learnMoreData} />
        </Route>
        <Route path="/doctor-login">
          <DoctorLogin {...doctorLoginData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const logo1Data = {
    logo1: "/img/logo-1@2x.png",
};

const ul1Data = {
    svg: "/img/svg-3@2x.png",
};

const mainData = {
    medikey: "/img/medikey-1@2x.png",
    logo2: "/img/logo-2@2x.png",
    learnMore1: "Learn More",
    poweringTheFuture: <React.Fragment>Powering the future of healthcare<br />through blockchain technology.</React.Fragment>,
    maxboroqogozwka1: "/img/maxboroqogozwka-1.png",
    spanText1: "With Medi",
    spanText2: "Key",
    spanText3: "'s ",
    spanText4: "Insight",
    spanText5: <React.Fragment> feature, you can get a comprehensive view of your patient&#x27;s health data. From blood pressure to sleep patterns, our platform securely transmits and organizes all the information you need to make informed treatment decisions.<br /><br />Need a second opinion? Collaborate with your team members more efficiently with Medi</React.Fragment>,
    spanText6: "Key",
    spanText7: "'s ",
    spanText8: "Collaborate",
    spanText9: ". Our platform allows you to securely share patient data with other healthcare providers, enabling you to work together to provide the best care possible.",
    learnMore2: "Learn more",
    remotePatientMonit: "Remote patient monitoring, made accessible and easier.",
    signIn: "Sign in",
    title: "Your one-stop health solution.",
    div1: "/img/retirement-whatsnew--66fc1e4cddbc5e3c88da656bac1d4e1c-png.png",
    withDecentralizedA: "With decentralized and private health data management, your records are always accessible and secure. Enjoy the peace of mind.",
    div2: "/img/goldsweep--276ef72c89e5aa1cf641cbc5cbf89df5-png.png",
    unlockTheFullPote: "Unlock the full potential of your health data with our digital identity key, which provides secure access to your records anytime.",
    div3: "/img/goldsweep--276ef72c89e5aa1cf641cbc5cbf89df5-png-1.png",
    weUseBlockchainTo: "We use blockchain to create an interconnected healthcare system, where patients and providers can seamlessly share data in real-time.",
    logoProps: logo1Data,
    ulProps: ul1Data,
};

const patientLoginData = {
    logo1: "/img/logo-1@2x.png",
    spanText1: "Medi",
    spanText2: "Key",
    line1: "/img/line-1-1@2x.png",
    dknsrrdivgikyjw1: "/img/dknsrrdivgikyjw-1@2x.png",
    welcomeBack: "Welcome back!",
    setupYourProfileNow: "Setup your profile now",
    newToWeb3: "New to Web3?",
    doYouAlreadyHaveAWallet: "Do you already have a wallet?",
    spanText3: "Are you a medical provider?",
    spanText4: "Continue here",
};

const logo2Data = {
    logo1: "/img/logo-1-4@2x.png",
};

const ul2Data = {
    svg: "/img/svg-4@2x.png",
};

const learnMoreData = {
    signIn: "Sign in",
    spanText1: "Medi",
    spanText2: "Key",
    spanText3: " utilizes blockchain technology to securely transmit patient data and enable doctors to remotely monitor their patients. With ",
    spanText4: "Medi",
    spanText5: "Key",
    spanText6: ", patients can easily share their medical history and treatment information with their healthcare providers, while doctors can access real-time updates and make informed treatment decisions. By combining cutting-edge technology with the expertise of medical professionals, ",
    spanText7: "Medi",
    spanText8: "Key",
    spanText9: " is bringing digital health identity to everyone and transforming the way healthcare is delivered.",
    whatIsMedikeyDiscoverTheFutureOfHea: "/img/what-is-medikey--discover-the-future-of-healthcare@2x.png",
    maxboroqogozwka1: "/img/maxboroqogozwka-1-1@2x.png",
    maxboroqogozwka2: "/img/maxboroqogozwka-2@2x.png",
    maxboroqogozwka3: "/img/maxboroqogozwka-1-1@2x.png",
    secureAccessible: "Secure, Accessible, and Efficient Healthcare",
    spanText10: "With ",
    spanText11: "Medi",
    spanText12: "Key",
    spanText13: ", patients can have their medical ID on a secure and decentralized blockchain platform, giving them complete control over their healthcare information. Doctors can remotely monitor patients and provide timely and accurate care, no matter where they are in the world. ",
    spanText14: "Medi",
    spanText15: "Key",
    spanText16: " enables efficient communication of healthcare needs and makes it easier to manage chronic conditions. With ",
    spanText17: "Medi",
    spanText18: "Key",
    spanText19: ", patients and doctors can be confident in the security and accessibility of their healthcare data.",
    theInnerWorkingsOfMedikeyFromWearab: "/img/the-inner-workings-of-medikey-from-wearable-devices-to-doctor-ne@2x.png",
    place: "Home",
    logoProps: logo2Data,
    ulProps: ul2Data,
};

const doctorLoginData = {
    logo1: "/img/logo-1@2x.png",
    spanText1: "Medi",
    spanText2: "Key",
    line1: "/img/line-1-1@2x.png",
    dknsrrdivgikyjw1: "/img/dknsrrdivgikyjw-1@2x.png",
    welcomeBack: "Welcome back!",
    setupYourProfileNow: "Setup your profile now",
    newToWeb3: "New to Web3?",
    doYouAlreadyHaveAWallet: "Do you already have a wallet?",
    spanText3: "Are you a patient?",
    spanText4: "Continue here",
};

const patientDashboardData = {
    logo1: "/img/logo-1@2x.png",
    spanText1: "Medi",
    spanText2: "Key",
    hiJaneDoe: "Hi, Jane Doe.",
    logOut: "Log Out",
    overlapGroup: "/img/rectangle-14.png",
    title: "Dashboard",
    line2: "/img/line-2.png",
    spanText3: "Heart rate                                     ",
    spanText4: "Sharing",
    spanText5: "Daily walking distance               ",
    spanText6: "Sharing",
    spanText7: "Blood pressure                        ",
    spanText8: "Not sharing",
    spanText9: "Sleep patterns                             ",
    spanText10: "Sharing",
};

const patientFormPageData = {
    logo1: "/img/logo-1@2x.png",
    spanText1: "Medi",
    spanText2: "Key",
    hiJaneDoe: "Hi, Jane Doe.",
    logOut: "Log Out",
    spanText3: <React.Fragment>Personal Information<br /></React.Fragment>,
    spanText4: <React.Fragment><br /></React.Fragment>,
    spanText5: <React.Fragment>First name:                                      Last name:                                         Preferred name:<br />Gender:                                            Preferred pronouns:<br /></React.Fragment>,
    spanText6: <React.Fragment><br /></React.Fragment>,
    spanText7: <React.Fragment>Medical Information<br /></React.Fragment>,
    spanText8: <React.Fragment><br /></React.Fragment>,
    spanText9: <React.Fragment>Primary care physician:                                            Contact:<br />Address:<br /><br />Please list any medical conditions:<br />Please list any current medications:<br />Please list any allergies:<br />Additional information:</React.Fragment>,
    spanText10: "",
    spanText11: <React.Fragment>Emergency digital medical consent<br /><br /></React.Fragment>,
    spanText12: "I,                                   consent to MediKey sending my medical data and authorizing medical care for myself in the event of an emergency.",
    rectangle4: "/img/rectangle-4@2x.png",
    xcontinue: "Continue",
};

