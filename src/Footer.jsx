import React from "react"
import "./index.css";
import Facebook from './assets/Facebook Icon.png'
import GitHub from "./assets/GitHub Icon.png";
import Instagram from "./assets/Instagram Icon.png";
import Twitter from "./assets/Twitter Icon.png";


export default function () {
    return (
      <footer>
        <a href="https://github.com/githubarj" target="_blank"><img src={GitHub}></img></a>
        <a href="https://twitter.com/githubarj" target="_blank">
          <img src={Twitter}></img>
        </a>
        <img src={Instagram}></img>
        <img src={Facebook}></img>
      </footer>
    );
}