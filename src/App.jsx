import "./App.scss";
import styled from "styled-components";
import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import Candidates from "./pages/Candidates";
// import Footer from "./components/Footer";

const Nav = styled.div`
  width: 100%;
`;

const MainContent = styled.div`
  margin: 2rem 0 1rem 0;
  width: 100%;
`;

const WholeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 15rem 1rem 15rem;
  margin: 0 5rem;
`;

const Bottom = styled.div`
  width: 100%;
`;

function App() {
  return (
    <BrowserRouter>
      <WholeContainer>
        <Nav>
          <NavBar />
        </Nav>
        <MainContent>
          <Candidates />
        </MainContent>
        <Bottom>
          {/* <Footer /> */}
        </Bottom>
      </WholeContainer>
    </BrowserRouter>
  );
}

export default App;
