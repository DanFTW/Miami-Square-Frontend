import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/logo/Union.svg";

const menuItems = [
  {
    id: "4",
    title: "Jobs",
    path: "/jobs",
  },
  {
    id: "2",
    title: "Local Business",
    path: "/local",
  },

  {
    id: "5",
    title: "Candidates",
    path: "/candidates",
  },
];

const Logo = styled.div`
  // height: 3rem;
  // width: 3rem;
  // background: black;
`;

const UserCont = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.div`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  background: black;
  margin: 0 1rem 0 0;
`;

const ProfileInfo = styled.p`
  margin: 0.2rem 0;
  font-size: 0.9rem;
`;

const InfoCont = styled.div``;

const Nav = styled.div`
  width: 100%;
  // height: 100%;
  padding: 1rem 1rem 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Items = styled.p`
  margin: 0 1rem;
`;

const ItemCont = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function NavBar({}) {
  return (
    <>
      <Nav>
        <Logo><img src={logo} id="logo-aqua"/></Logo>
        {/* <Logo /> */}
        <ItemCont>
          {menuItems.map((menuItem) => {
            return (
              <Link to={menuItem.path} key={menuItem.id}>
                <Items>{menuItem.title}</Items>
              </Link>
            );
          })}
        </ItemCont>

        <UserCont>
          <ProfileImage />
          <InfoCont>
            <ProfileInfo>Daniel Figueroa</ProfileInfo>
            <ProfileInfo>@Dan123</ProfileInfo>
          </InfoCont>
        </UserCont>
      </Nav>
    </>
  );
}
