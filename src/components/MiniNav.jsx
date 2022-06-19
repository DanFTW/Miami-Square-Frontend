import { NavLink } from "react-router-dom";
import { Nav, Items } from "../styles/styles";

const menuItems = [
  {
    id: "1",
    title: "About",
    path: "/",
  },
  {
    id: "2",
    title: "Experience",
    path: "/candidates/experience",
  },
  {
    id: "3",
    title: "Education",
    path: "/candidates/education",
  },
  {
    id: "5",
    title: "Badges",
    path: "/candidates/badges",
  },
  {
    id: "6",
    title: "Activity",
    path: "/candidates/activity",
  },
];

export default function MiniNav() {
  return (
    <>
      <Nav>
        {menuItems.map((menuItem) => {
          return (
            <NavLink
              to={menuItem.path}
              key={menuItem.id}
              activeClassName='current'
            >
              <Items>{menuItem.title}</Items>
            </NavLink>
          );
        })}
      </Nav>
    </>
  );
}
