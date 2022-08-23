import React,{useState,useEffect} from 'react';
import { useNavigate,NavLink} from 'react-router-dom';
const Login = () => {
    const history = useNavigate();
    const [user, setUser] = useState([{
        email: "",
        password: "",
    }]);

    let ename, value;
    const setData = (e) => {
        ename = e.target.name;
        value = e.target.value;
        setUser({ ...user, [ename]: value });
    }

    const checkData = async (e) => {
        e.preventDefault();
        const { email, password } = user;

        const res = await fetch("http://localhost:8003/checkdonor", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });
        const data = await res.json();
        console.log(data.id);
        console.log(res.status);
        if (res.status === 422) {
            alert("Incorrect Password");
        }
        else {
            /*if (window.location.href.indexOf("loginanddelete") > -1) {
                const res = await fetch(`http://localhost:8003/deleteuser/${data.id}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                const deleteData = await res.json();
                console.log(deleteData);
                if (res.status === 404 || !deleteData) {
                    console.log("Error!");
                } else {
                    console.log("User is succesfully deleted.");
                    history("/list");
                }
            }
            else {
                history(`/update/${data.id}`);
            }*/
            history(`/view/${data.id}`);
        }
    }

    return (
        <div class="Login container">
            <div className="row m-5 justify-content-center">
                <div class="col-md-4 image-col">
                </div>
                <div class="loginForm col-md-7">
                    <h3>Login Form</h3>
                    <form className="">
                        <div class="form-group mb-3 col-lg-6">
                            <label class="form-label">Email</label>
                            <input type="text" class="form-control" value={user.email} name="email" onChange={setData} id="email" placeholder="Enter your email" />
                        </div>
                        <div class="form-group mb-3 col-lg-6">
                            <label class="form-label">Password</label>
                            <input type="password" class="form-control" value={user.password} name="password" onChange={setData} id="password" placeholder="Enter your Password" />
                        </div>
                        <div className="form-group">
                            <button type="submit" class="btn btn-danger" onClick={checkData}>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login