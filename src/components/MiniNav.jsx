import { NavLink } from "react-router-dom";
import { Nav, Items } from "../styles/styles";

const menuItems = [
  {
    id: "1",
    title: "Experience",
    path: "/candidates/experience",
  },
  {
    id: "2",
    title: "Education",
    path: "/candidates/education",
  },
  {
    id: "3",
    title: "Jobs",
    path: "/candidates/jobs",
  },
  {
    id: "4",
    title: "Badges",
    path: "/candidates/badges",
  },
  {
    id: "5",
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
