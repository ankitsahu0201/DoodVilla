import { NavLink } from "react-router-dom";

const HeaderLogo = () => {
  return (
    <div className="logo">
      <NavLink to="/">
        <img src="https://scontent.fpnq7-4.fna.fbcdn.net/v/t39.30808-6/300979184_393134336299408_2231594848784341830_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=iKcPFcIDJMkAX9ejWkC&_nc_ht=scontent.fpnq7-4.fna&oh=00_AfB50Ti9933xM6gGyzQe8I9E5v0WZ8ilzJNHlOwT039kBQ&oe=63BFA8DD" />
      </NavLink>
    </div>
  );
};

const HeaderNavLinks = () => {
  return (
    <ul className="nav-lists">
      <NavLink to="/offers">
        <li>Offers</li>
      </NavLink>
      <NavLink to="/help">
        <li>Help</li>
      </NavLink>
      <li>Cart</li>
      <li>Logout</li>
    </ul>
  );
};

const HeaderComponent = () => {
  return (
    <div className="header">
      <HeaderLogo />
      <HeaderNavLinks />
    </div>
  );
};

export default HeaderComponent;
