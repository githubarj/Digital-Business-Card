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
      <h1>Richard Jeremy Githuba</h1>
      <h3>FullStack Developer</h3>
      <p>githubarj.com</p>
      <div className="buttons">
        <button>
          <img src={mail} className="main-icon"></img>Email
        </button>
        <button>
          <img src={linkedIn} className="linkedin-icon"></img>LinkedIn
        </button>
      </div>
    </div>
  );
}
