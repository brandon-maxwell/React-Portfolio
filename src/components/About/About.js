import React from "react";
import "../../assets/css/style.css";
import ProfilePic from "../../assets/images/profile-pic-small.jpg";


function About() {
    return (
    <section className="page-section" id="about">
          <div className="profile_adjust" id="smallProfile">
              <img src={ProfilePic} alt="Profile Headshot" height="150px" width="150px"/><br/>
          </div>
          <h1 id="smallProfile">Brandon Maxwell</h1><br/>
          
          <h2>About Me</h2>
          <p>
              My name is Brandon Maxwell. I graduated from Missouri State University
              in 2009 with my Bachelor of Science in Marketing and I am currently a
              Commercial Claims Investigator. I have been investigating claims for
              the past 6 years but I have recently decided to make a change in my career
              and become a Full Stack Web Developer. I am currently enrolled in the
              Coding Boot Camp at Washington University in collaboration with Trilogy
              Education Services. I am very excited to have this opportunity and I am
              really enjoying learning all the course has to offer. I cannot wait to
              be able to use my newly acquired skills to be able to start my new career!
          </p>
      </section>

        );
    }
    
    export default About