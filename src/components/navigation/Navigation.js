import { NavLink } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";
import NavigationStyled from "./NavigationStyled";

const Navigation = () => {
  return (
    <NavigationStyled>
      <ul className="nav_list">
        {mainRoutes.map(({ name, path, exact }) => (
          <li key={path} className="nav_list_item">
            <NavLink
              to={path}
              exact={exact}
              className="nav_link"
              activeClassName="active_Link"
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
