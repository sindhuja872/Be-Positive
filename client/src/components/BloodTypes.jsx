import React from 'react';
import './styles.css';
const BloodTypes = () =>{
    return(
        <div className="bloodtypes">
            <h1 className='heading'>Blood Types</h1>
            <div className="grid-container">
                <div className="grid-item">
                    <div className="card">
                        <img src="Icons/t2.jpg"></img>
                        <h4>A Positive</h4>
                        <p>A+ is the second most common blood type</p>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="card">
                        <img src="Icons/t3.jpg"></img>
                        <h4>B Positive</h4>
                        <p>Only 8% of donors are B positive but there is always a need for it</p>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="card">
                        <img src="Icons/t4.jpg"></img>
                        <h4>AB Positive</h4>
                        <p>Around 2% of fonors have AB positive blood</p>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="card">
                        <img src="Icons/t10.jpg"></img>
                        <h4>AB Negative</h4>
                        <p>AB- is the rarest of the 8 main blood types</p>
                    </div>
                </div>
            </div>
            <div className="grid-container">
                <div className="grid-item">
                    <div className="card">
                        <img src="Icons/t5.jpg"></img>
                        <h4>O Positive</h4>
                        <p>O+ is the most common blood type</p>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="card">
                        <img src="Icons/t6.jpg"></img>
                        <h4>A Negative</h4>
                        <p>A- is the universal platelet type</p>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="card">
                        <img src="Icons/t7.jpg"></img>
                        <h4>B Negative</h4>
                        <p>Just 2% of donors are B neagtive , making one of the rarest blood types</p>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="card">
                        <img src="Icons/t9.jpg"></img>
                        <h4>O Negative</h4>
                        <p>O negative donors are often called 'universal donors'</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <h2>Rare Blood Types</h2>
                <ul>
                <li>AB negative is the rarest of the eight main blood types - just 1% of our donors have it.</li>
                <li>Despite being rare, demand for AB negative blood is low and we dont struggle to find donors with AB negative blood.</li>
                <li>However, some blood types are both rare and in demand.
                    This includes the Ro subtype, which is often used to treat people with sickle cell.
                    Only 2% of donors have it but demand for it is increasing by 10-15% each year.</li>
                <li>The combination of being rare and sought after makes people with these blood types very important donors.</li>
                </ul>
            </div>
            <center><h2 className='th'>Blood Types Compatibility</h2>
            <img src="Icons/t11.jpg" className="tb"></img></center>
        </div>
    );
}
    
export default BloodTypes;
