import React,{useState,useEffect,useContext} from 'react';
import {NavLink} from 'react-router-dom';
import './styles.css';
import stateCity from './stateCity.json';

const Table = () => {
        const [city,setCity] = useState([]);
        const handleState = (name)=>{
            console.log(name);
            const n = stateCity.States.filter(x => x.sname===name);
            const dt = stateCity.Cities.filter(x => x.sid === n[0].id);
            setCity(dt); 
        }
       const [getuserdata,setUserdata] = useState([]);
       console.log(getuserdata);
       const [bgFilter, setBgFilter] = useState("");
       const[stateFilter,setStateFilter] = useState("");
       const[cityFilter,setCityFilter] = useState("");
       const getData = async()=>{
        const res = await fetch(`http://localhost:8003/getdata`,{
            method: "GET",
            headers:{
                "Content-Type":"application/json"
            },
        });
        
        const data = await res.json();
        console.log(data);

        if(res.status===422 || !data){
               alert("error");
               console.log("error ");
        }
        else{
            setUserdata(data)
            console.log("got data");
        }

        
       }
       
       useEffect(()=>{
        getData();
       },[])
       
       /*const deleteuser = async (id)=>{
          
        const res2 = await fetch(`http://localhost:8003/deleteuser/${id}`,{
            method: "DELETE",
            headers:{
                "Content-Type":"application/json"
            },
        });

        const deleteduser = await res2.json();
        console.log(deleteduser);

        if(res2.status==422 || !deleteduser){
            console.log("error");
        }else{
            console.log("user deleted");
            getData();
        }
        <td><NavLink to={`update/${element._id}`}><button className="btn">Update</button></NavLink></td>
        <td><button className="btn" onClick={()=>deleteuser(element._id)}>Delete</button></td>
       }*/

    return (
        
            <div className="table mt-5">
                <div className="container">
                <div style={{ display: "flex", justifyContent: "space-between"}}>
                    <div className="btns">
                        <label>
                        Select Bloodgroup:  </label>
                        <select
                            value={bgFilter}
                            onChange={(e) => setBgFilter(e.currentTarget.value)}>
                            <option value="">---</option>
                            <option value="O+ve">O+ve</option>
                            <option value="O-ve">O-ve</option>
                            <option value="B+ve">B+ve</option>
                            <option value="B-ve">B-ve</option>
                            <option value="A+ve">A+ve</option>
                            <option value="A-ve">A-ve</option>
                            <option value="B+ve">B+ve</option>
                            <option value="B-ve">B-ve</option>
                            <option value="AB+ve">AB+ve</option>
                            <option value="AB-ve">Ab-ve</option>
                        </select>
                        
                    </div>
                    <div className="btns">
                        <label>Select State: </label>
                        <select
                            value={stateFilter}
                            onChange={(e) => { handleState(e.target.value); setStateFilter(e.currentTarget.value)}}>
                            <option value="">---</option>
                            {
                                stateCity.States.map((result)=>(<option text={result.sname} id={result.id} value={result.sname}>{result.sname}</option>))
                            }
                        </select>
                    </div>
                    <div class="btns">
                        <label> Select City:</label>
                        <select value={cityFilter} onChange={(e)=> setCityFilter(e.currentTarget.value)}>
                            <option value="">---</option>
                            {
                            city.map((ctr,index) =>{
                                return(<option key={index} value={ctr.cname}>{ctr.cname}</option>)
                            })                                             
                            }
                        </select>
                    </div>
                </div>
                    <br></br>
                    <table class="styledtable table table-striped table-hover table-responsive">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Age</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Blood Group</th>
                                <th scope="col">State</th>
                                <th scope="col">City</th>
                                <th scope="col">Contact Info</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                getuserdata
                                .filter(({ bloodgroup, state , city}) => bgFilter && stateFilter && cityFilter
                                                ? bloodgroup.includes(bgFilter) && 
                                                  state.includes(stateFilter) && city.includes(cityFilter)
                                                : true
                                            )
                                .map(element=>{
                                    return(
                                        <>
                                        <tr>
                                            <td>{element.name}</td>
                                            <td>{element.age}</td>
                                            <td>{element.gender}</td>
                                            <td>{element.bloodgroup}</td>
                                            <td>{element.state}</td>
                                            <td>{element.city}</td>
                                            <td><NavLink to={`/contact/${element._id}`}><button className="btn">Contact</button></NavLink></td>
                                        </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
    );
}

export default Table;