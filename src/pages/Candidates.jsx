import styled from "styled-components";
import MiniNav from "../components/MiniNav";
import { Switch, Route } from "react-router-dom";
import Experience from "./Experience";
import Education from "./Education";
import Badges from "./Badges";
import Activity from "./Activity";
import About from "./About";
import { Buttons } from "../styles/styles";

const Banner = styled.div`
  width: 100%;
  border: 1px solid black;
  background: linear-gradient(#00979c 0%, #00979c 50%, white 50%, white 100%);
  padding: 2rem 2rem 1rem 2rem;
  margin-bottom: 1.5rem;
`;

const ProfileImage = styled.div`
  border: 1px solid black;
  border-radius: 50%;
  background: #98dddf;
  height: 7rem;
  width: 7rem;
  // margin-bottom: 1rem;
`;

const Header = styled.h2`
  font-size: 1.2rem;
  // font-weight: 500;
`;

const SubHeader = styled.h4`
  font-size: 1rem;
  font-weight: 500;
`;

const Copy = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
`;

const Title = styled.h1`
  margin: 0 1.5rem 1rem;
  font-size: 1.5rem;
`;

const Container = styled.div`
  // border: 1px solid red;
  display: flex;
  align-items: end;
  // flex-direction: row;
`;

export default function Candidates() {
  return (
    <>
      <Title>Candidates</Title>
      <Banner>
        <ProfileImage />
        <Container id='btn-cont'>
          <Header>John Doe</Header>
          <Buttons>Follow</Buttons>
        </Container>
        <SubHeader>Software Developer</SubHeader>
        <Copy>Building the new digital economy.</Copy>

        <Container id='left-banner'>
          <Copy id='location-banner'>Miami, FL.</Copy>
          <div id='followers'>
            <Copy id='follow-qty'>Following 100</Copy>
            <Copy id='follow-qty'>Followers 75</Copy>
          </div>
        </Container>
      </Banner>

      <MiniNav />

      <Switch>
        <Route path='/' exact component={About} />
        <Route path='/candidates/experience' exact component={Experience} />
        <Route path='/candidates/education' exact component={Education} />
        {/* <Route path='/candidates/badges' exact component={Badges} /> */}
        {/* <Route path='/candidates/activity' exact component={Activity} /> */}
      </Switch>
    </>
  );
}
