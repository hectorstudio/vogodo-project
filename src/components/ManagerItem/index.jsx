import React from "react";
import "./ManagerItem.style.scss";
import Profile from "../../assets/img/profile.jpg";
import { Link } from "react-router-dom";
import Routes from "../../constants/Routes";

const ManagerItem = () => {
  return (
    <Link to={Routes.managerdetail}>
      <div className="manager-item">
        <div className="manager-profile">
          <img src={Profile} alt="profile" />
        </div>
        <div className="manager-detail">
          <div className="manager-name">Michael Elbilia</div>
          <div className="manager-title">Real Estate Sales Associate</div>
          <div className="manager-address">Coldwell Banker | Miami, FL</div>
          <div className="languages">Languages: English, French</div>
        </div>
        <div className="manager-contact">
          <div className="office-number">
            office (305) 305-6091
          </div>
          <div className="mobile-number">
            mobile (305) 305-6091
          </div>
          <div className="email">
            Email
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ManagerItem;
