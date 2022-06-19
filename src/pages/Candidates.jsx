import styled from "styled-components";
import MiniNav from "../components/MiniNav";
import { Switch, Route } from "react-router-dom";
import Experience from "./Experience";
import Education from "./Education";
import Jobs from "./Jobs";
import Badges from "./Badges";
import Activity from "./Activity";

const Banner = styled.div`
  width: 100%;
  border: 1px solid black;
  background: linear-gradient(white 0%, white 50%, #98dddf 50%, #98dddf 100%);
  padding: 2rem;
  margin-bottom: 1.5rem;
`;

const ProfileImage = styled.div`
  border: 1px solid black;
  border-radius: 50%;
  background: white;
  height: 7rem;
  width: 7rem;
  margin-bottom: 1rem;
`;

const Header = styled.h2`
  font-size: 1.2rem;
`;

const SubHeader = styled.h4`
  font-size: 0.9rem;
`;

const Title = styled.h1`
  margin: 0 1.5rem 1rem;
  font-size: 1.5rem;
`;

export default function Candidates() {
  return (
    <>
      <Title>Candidates</Title>
      <Banner>
        <ProfileImage />
        <Header>Candidate Name</Header>
        <SubHeader>Job/Career Title</SubHeader>
        <SubHeader>Location</SubHeader>
      </Banner>
      <MiniNav />

      <Switch>
        <Route path='/candidates/experience' exact component={Experience} />
        <Route path='/candidates/education' exact component={Education} />
        <Route path='/candidates/jobs' exact component={Jobs} />
        <Route path='/candidates/badges' exact component={Badges} />
        <Route path='/candidates/activity' exact component={Activity} />
      </Switch>
    </>
  );
}
