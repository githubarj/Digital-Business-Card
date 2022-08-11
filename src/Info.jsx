import React from "react";
import "./index.css";
import profilePicture from "./assets/WhatsApp Image 2022-08-10 at 9.29.27 PM.jpeg";
import mail from "./assets/Mail.png";
import linkedIn from "./assets/linkedin.png";

export default function Info() {
  return (
    <div className="info">
      <img
        src={profilePicture}
        alt="profile picture"
        className="profile-picture"
      />
      <h1>Richard J Githuba</h1>
      <h3>FullStack Developer</h3>
      <p className="website">githubarj.com</p>
      <div className="buttons">
        <button className="mail-btn">
          <img src={mail} className="icon"></img>Email
        </button>
        <button className="linkedin-btn">
          <img src={linkedIn} className="icon"></img>LinkedIn
        </button>
      </div>
    </div>
  );
}
