import React from 'react';
import './styles.css';
const Eligibility = () =>{
    return(
        <div className="eligibility">
            <h1>Donor Eligibility</h1>
            <div className="grid-container">
                <div className="grid-item">
                    <div className="maincontainer">
                        <div className="thecard">
                            <div className="thefront">
                                <h3>Age</h3>
                                <center><img src="Icons/e2.png"></img></center>
                            </div>
                            <div className="theback">
                                <ul>
                                <li>Donors must be atleast 16 years old to donate with parent consent</li>
                                <li>Minimum-18years</li>
                                <li>Maximum-65years</li>
                                <li>First time donor-not more than 60 years</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="maincontainer">
                        <div className="thecard">
                            <div className="thefront">
                                <h3>Healthy and Well</h3>
                                <center><img src="Icons/e3.png"></img></center>
                            </div>
                            <div className="theback">
                                <ul>
                                    <li>Donors must be in good health and feeling well.</li>
                                    <li>Free of colds,open,cuts,cold sore and infections.</li>      
                                    <li>You must not donate blood If you do not meet the minimum haemoglobin level for blood donation(not less than 12.0 g/dl for females and not less than 13.0 g/dl for males as the threshold).</li>
                                    <li>If you have visited the dentist for a minor procedure you must wait 24 hours before donating; for major work wait a month.</li>                   
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="maincontainer">
                        <div className="thecard">
                            <div className="thefront">
                                <h3>Weight</h3>
                                <center><img src="Icons/e4.png"></img></center>
                            </div>
                            <div className="theback">
                                <ul>
                                    <li>Donors 16years old must weight 120lbs (55kgs) and donors 17 years old and over must weight 110lbs(50 kgs)</li>
                                    <li>You weigh at least 50 kg.</li>
                                    <li>In some countries, donors of whole blood donations should weigh at least 45 kg to donate 350 ml ± 10%.</li>

                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="maincontainer">
                        <div className="thecard">
                            <div className="thefront">
                                <h3>Eat Well</h3>
                                <center><img src="Icons/e5.png"></img></center>
                            </div>
                            <div className="theback">
                                <ul>
                                    <li>Eat a substantial meal 4 hours prior to donation</li>
                                    <li>Drink plenty of hydrating fluids (water/milk/juice) the day prior,day of and after donation.</li>              
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
    );
}
    
export default Eligibility;