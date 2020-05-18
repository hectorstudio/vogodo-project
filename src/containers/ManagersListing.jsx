import React from "react";
import "./ManagersListing.style.scss";
import Breadcrumbs from "../components/Breadcrumbs";
import ManagerItem from "../components/ManagerItem";
import { Link } from "react-router-dom";
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  KeyboardArrowDown,
} from "@material-ui/icons";

const ManagersListing = () => {
  return (
    <div className="container">
      <Breadcrumbs parent="Find a Property Manager" child="Search..." />
      <div className="managers-container">
        <div className="navigator">
          <Link to="/managers">
            {" "}
            <KeyboardArrowLeft /> Modify Your Search{" "}
          </Link>
          <Link to="#">
            {" "}
            Next <KeyboardArrowRight />{" "}
          </Link>
        </div>
        <div className="managers-content">
          <div className="content-header">
            <h2 className="search-title">Miami, FL Property Managers</h2>
            <button className="sort">
              Sort <KeyboardArrowDown />{" "}
            </button>
          </div>
          <div className="content-body">
            <ManagerItem />
            <ManagerItem />
            <ManagerItem />
            <ManagerItem />
            <ManagerItem />
            <ManagerItem />
            <ManagerItem />
            <ManagerItem />
          </div>
        </div>
        <div className="managers-footer">
          <div className="pagination">
            <ul>
              <li>
                <KeyboardArrowLeft />
              </li>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>
                <KeyboardArrowRight />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagersListing;
