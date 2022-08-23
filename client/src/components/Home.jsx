import React from 'react';
import {NavLink} from 'react-router-dom';
import FAQ from './FAQ';
const Home = () => {
    return (
        <div className="homePage">
            <section className="home">
                <div className="container">
                    <div className="caption">
                        <h1>Your droplets of blood may create an ocean of happiness.</h1>
                    </div>
                </div>
            </section>

            <section className="about" id="about">
                <div className="container">
                    <div className="row max-vh-100 align-items-center">
                        <div className="col-md-5 d-none d-md-block img">
                            <img src="Icons/Blood donation-amico.svg" width="80%" alt=""></img>
                        </div>
                        <div className="col-md-7 content">
                            <div className="box">
                                <h2><i className="fa fa-heartbeat fa-fw"></i><NavLink to="/donation">Donation Process</NavLink></h2>
                                <p>Click to know about the steps before, during and after blood donation.</p>
                            </div>
                            <div className="box">
                                <h2><i className="fa fa-sign-in fa-fw"></i><NavLink to="/eligibility">Eligibility Requirements</NavLink></h2>
                                <p>Click to learn more about the eligibility requirements for donating blood.</p>
                            </div>
                            <div className="box">
                                <h2><i className="fa fa-tint fa-fw"></i><NavLink to="/bloodtypes">Blood Types</NavLink></h2>
                                <p>Click to know about the different blood types and compatabilities.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FAQ/>
        </div>
    );
}

export default Home;