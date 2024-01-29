import React, { useState } from "react";
// import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Navbar = () => {
  // const navigate = useNavigate();
  const [filter, setfilter] = useState("");
  // console.log(filter);
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <b className="text-primary">Visual-Energy</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                About
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              list="filter"
              onChange={(e) => setfilter(e.target.value)}
              placeholder="Filter Your Data..."
            />
            <datalist id="filter">
              <option value="Intensity"></option>
              <option value="Country"></option>
              <option value="Region"></option>
              <option value="Topic"></option>
              <option value="Year"></option>
              <option value="Relevance"></option>
              <option value="Likelihood"></option>
            </datalist>
            <Link className="btn btn-outline-primary" type="submit" to={`/${filter.toLowerCase()}`}>
              Filter
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
