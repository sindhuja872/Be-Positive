import React from 'react';
import './styles.css';
const DonationProcess = () =>{
    return(
        <div>
            <div className="donation-container">
                <div className="centertext">
                    <h1>Donation Process</h1>
                </div>
                <div className="container">
                <div className="row">
                    <div className="col-sm-2">
                    <img src="Icons/d1.png"/>
                    </div>
                    <div className="col-sm-5">
                    <h4 className="donation-title"> Registration <span>(10 Mins)</span> </h4>
                    <p>Donor fills up the registration form and gives his consent for donation. </p>
                    </div>        
                </div>
                <div className="row">      
                    <div className="col-sm-5">
                    <h4 className="donation-title"> Medical Check up <span>(5 Mins)</span> </h4>
                    <p>Donors Medical History and life style is asked, check up of temperature, blood pressure, pulse and haemoglobin.</p>
                    </div>
                    <div className="col-sm-1">
                    <img src="Icons/d2.png"/>
                    </div>
                </div>
                <div className="row">     
                    <div className="col-md-2">
                    <img src="Icons/d3.png"/>
                    </div> 
                    <div className="col-md-6">
                    <h4 className="donation-title"> Donation <span>(8 Mins)</span></h4>
                    <p>Phlebotomist draws unit (350ml/450ml) of blood. A new sterile meedle is used to draw each unit and the needle is destroyed after it has been used. It taked less than 10 min.</p>      
                    </div> 
                </div>
                <div className="row">
                    <div className="col-md-5">
                    <h4 className="donation-title"> Refreshment <span>(10 Mins)</span></h4>
                    <p>Enjoy Snacks and drinks juice to replenish fluids. </p>  
                    </div>
                    <div className="col-md-2">
                    <img src="Icons/d4.png"/>
                    </div>
                </div> 
            </div>    
            </div>
        </div>
    );
}
    
export default DonationProcess;