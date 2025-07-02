import { NavLink } from "react-router-dom";

export default function SideNav() {
  return (
    <aside
      className="sidenav navbar navbar-vertical navbar-expand-xs border-radius-lg fixed-start ms-2  bg-white my-2"
      id="sidenav-main"
    >
      <div className="sidenav-header d-flex justify-content-center">
        <a
          className="navbar-brand px-4 py-3 m-0 d-flex justify-content-center align-items-center"
          href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard "
          target="_blank"
        >
          <span className="ms-1 text-lg text-dark">CRM</span>
        </a>
      </div>
      <hr className="horizontal dark mt-0 mb-2" />
      <div
        className="collapse navbar-collapse  w-auto "
        id="sidenav-collapse-main"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                `nav-link text-dark${isActive ? " active bg-gradient-dark text-white" : ""}`
              }
              to="/"
              end
            >
              <i className="material-symbols-rounded opacity-5">dashboard</i>
              <span className="nav-link-text ms-1">Dashboard</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                `nav-link text-dark${isActive ? " active bg-gradient-dark text-white" : ""}`
              }
              to="/customers"
            >
              <i className="material-symbols-rounded opacity-5">table_view</i>
              <span className="nav-link-text ms-1">Customers</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
}