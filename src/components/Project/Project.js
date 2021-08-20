import React from "react";
import "../../assets/css/style.css";

function Project() {
    return (

        <section className="page-section" id="work">
            <h2>My Work</h2>
            <div className="project-containter">
                <div className="row">
                    <div className="flex-item Project-1 col s12 m12 l10 offset-l1">
                        <div className="hoverTag">
                            <h4>Growr</h4>
                            <h5>MERN-Stack</h5>
                            <a href="https://growr-project.herokuapp.com/" className="waves-effect waves-light btn-small">Visit Site</a> <br/>
                            <a href="https://github.com/brandon-maxwell/growr-plant-exchange" className="waves-effect waves-light btn-small">See on GitHub</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="flex-item Project-2 col s12 m12 l5 offset-l1">
                        <div className="hoverTag">
                        <h4>Kiskis</h4>
                            <h5>Full-Stack</h5>
                            <a href="https://lit-escarpment-01189.herokuapp.com/" className="waves-effect waves-light btn-small">Visit Site</a> <br/>
                            <a href="https://github.com/brandon-maxwell/kiskis" className="waves-effect waves-light btn-small">See on GitHub</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="flex-item Project-3 col s12 m12 l5">
                            <div className="hoverTag">
                            <h4>Brew Me</h4>
                            <h5>JavaScript</h5>
                            <a href="https://brandon-maxwell.github.io/BREW_ME/" className="waves-effect waves-light btn-small">Visit Site</a> <br/>
                            <a href="https://github.com/brandon-maxwell/BREW_ME" className="waves-effect waves-light btn-small">See on GitHub</a>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="flex-item Project-4 col s12 m12 l5 offset-l1">
                            <div className="hoverTag">
                                <h4>Employee Directory</h4>
                                <h5>Full-Stack with React</h5>
                                <a href="https://brandon-maxwell.github.io/Employee-Directory/" className="waves-effect waves-light btn-small">Visit Site</a> <br/>
                                <a href="https://github.com/brandon-maxwell/Employee-Directory" className="waves-effect waves-light btn-small">See on GitHub</a>
                            </div>
                        </div>

                        <div className="row">
                            <div className="flex-item Project-5 col s12 m12 l5 ">
                                <div className="hoverTag">
                                    <h4>Fitness Tracker</h4>
                                    <h5>JavaScript / MongoDB</h5>
                                    <a href="https://aqueous-springs-60277.herokuapp.com/" className="waves-effect waves-light btn-small">Visit Site</a> <br/>
                                    <a href="https://github.com/brandon-maxwell/Workout_Tracker" className="waves-effect waves-light btn-small">See on GitHub</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Project;