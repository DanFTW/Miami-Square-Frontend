import styled from "styled-components";

export const Nav = styled.div`
  margin: 0.6rem 2rem;
  display: flex;
  justify-content: space-between;
  // border: 1px solid blue;
`;

export const Items = styled.p`
  margin: 0 1rem;
`;

export const Header = styled.h2`
  font-size: 1rem;
`;

export const SubHeader = styled.h4`
  font-size: 0.9rem;

`;

export const Copy = styled.p`
  font-size: 0.88rem;
`;

export const Card = styled.div`
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid grey;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    background: #e1d19866;
  }
`;



export const CardAbout = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  
`;

export const InfoCont = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 1.5rem;
  align-items: center;
`;

export const Info = styled.div`

`;

export const Image = styled.div`
  height: 4rem;
  width: 4rem;
  border-radius: 10px;
  background-color: #e198ad;
`;

export const NavCont = styled.div`
  margin-right: 1rem;
  display: flex;
  justify-content: flex-end;
`;

export const Buttons = styled.button`
  max-width: max-content;
  min-width: 7rem;
  border: 1px solid black;
  border-radius: 1rem;
  padding: 0.5rem;
  // margin: 0.5rem 1rem 0 1rem; 
  background: #98dddf;
  font-weight: 600;
`;
