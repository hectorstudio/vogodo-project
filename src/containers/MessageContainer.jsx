import React from 'react';
import './MessageContainer.style.scss';
import Breadcrumbs from '../components/Breadcrumbs';
import Profile from '../assets/img/profile.jpg';
import { Send } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Routes from "../constants/Routes";

const MessageContainer = () => {
  return (
    <div className="container">
      <Breadcrumbs parent="Account" child="Messages" />
      <div className="messages-container">
        <div className="contactor-sidebar">
          <div className="title">Contactors</div>
          <div className="contactors-list">
            <div className="contactor-avatar">
              <img src={Profile} alt="profile" />
              Name of Contactor
            </div>
            <div className="contactor-avatar active">
              <img src={Profile} alt="profile" />
              Name of Contactor
            </div>
            <div className="contactor-avatar">
              <img src={Profile} alt="profile" />
              Name of Contactor
            </div>
            <div className="contactor-avatar">
              <img src={Profile} alt="profile" />
              Name of Contactor
            </div>
          </div>
        </div>
        <div className="messages-content">
          <div className="content-header">
            <div className="contactor-avatar">
              <img src={Profile} alt="profile" />
              Name of Contactor
            </div>
            <div className="contactor-link">
              <Link to={Routes.home}>Visit Profile</Link>
            </div>
          </div>
          <div className="content-body">
            <div className="owner-message">
              <div className="message">
                <div className="box">
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor</p>
                </div>
                <div className="time">12:45</div>
              </div>
            </div>
            <div className="contactor-message">
              <div className="message">
                <div className="box">
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor</p>
                </div>
                <div className="time">12:45</div>
              </div>
              <div className="contactor-avatar">
                <img src={Profile} alt="profile" />
              </div>
            </div>
            <div className="owner-message">
              <div className="message">
                <div className="box">
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor</p>
                </div>
                <div className="time">12:45</div>
              </div>
            </div>
          </div>
          <div className="content-footer">
            <div className="send-message-box">
              <input type="text" name="message" placeholder="Type your message...." />
              <button><Send />Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default MessageContainer;
