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
            <a className href={Resume} target="_blank">Resume</a>
            <br/>
            <a className="nav-link" data-toggle="popover" title="(417)693-6331" href="tel:+14176936331"><img src={Phone} alt="phone"
                    height="30px"/></a> 
            <a className="nav-link" data-toggle="popover" title="brandon.l.maxwell@gmail.com" href="mailto:brandon.l.maxwell@gmail.com"><img src={Email} alt="email"
                    height="30px"/></a>
            <a className="nav-link" data-toggle="popover" title="https://github.com/brandon-maxwell" href="https://github.com/brandon-maxwell" target="_blank"><img src={GitHub}
                    alt="GitHub" height="30px"/></a>
            <a className="nav-link" data-toggle="popover" title="https://www.linkedin.com/in/brandon-maxwell-b307b955/" id="linkedin" href="https://www.linkedin.com/in/brandon-maxwell-b307b955/" target="_blank"><img
                    src={LinkedIn} alt="LinkedIn" height="30px"/></a>
        </div>

    );
  }
  
  export default Header