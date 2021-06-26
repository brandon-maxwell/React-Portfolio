import React from "react";
import "../../assets/css/style.css";
import ProfilePic from "../../assets/images/profile-pic-small.jpg";
import Resume from "../../assets/Resume.pdf";
import Phone from "../../assets/images/phone-call.png";
import Email from "../../assets/images/email.png";
import GitHub from "../../assets/images/GitHub-Mark-64px.png";
import LinkedIn from "../../assets/images/LI-In-Bug.png";


function Header() {
    return (
        <div className="aside">
            <div className="profile_pic">
                <img src={ProfilePic} alt="Profile Headshot" height="150px" width="150px"/><br/>
            </div>
            <h1 id="primaryH1">Brandon Maxwell</h1><br/>
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#work">Work</a>
            <a className href={Resume}>Resume</a>
            <br/>
            <a className="nav-link" href="tel:+14176936331"><img src={Phone} alt="phone"
                    height="30px"/></a>
            <a className="nav-link" href="mailto:brandon.l.maxwell@gmail.com"><img src={Email} alt="email"
                    height="30px"/></a>
            <a className="nav-link" href="https://github.com/brandon-maxwell"><img src={GitHub}
                    alt="GitHub" height="30px"/></a>
            <a className="nav-link" id="linkedin" href="https://www.linkedin.com/in/brandon-maxwell-b307b955/"><img
                    src={LinkedIn} alt="LinkedIn" height="30px"/></a>
        </div>

    );
  }
  
  export default Header