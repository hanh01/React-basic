import React, {useState} from 'react';
import LoginA from "./LoginA";

function FormLogin() {
    const adminUser = {
        email: "hanh@gmail.com",
        password: "hanh2101"
    }

    const [user, setUser] = useState({email: "", name: ""});
    const [error, setError] = useState("");

    const Login = details => {
        if (details.email === adminUser.email && details.password === adminUser.password) {
            console.log("log in")
            setUser({
                email: details.email,
                name: details.name
            })
        } else {
            setError("Details do not match!")
        }
    }
    const Logout = () => {
        setUser({email: "", name: ""})
    }

    return (
        <div className="FormLogin">
            {(user.email !== "") ? (
                <div className="welcome">
                    <h2>Welcome, <span>{user.name}</span></h2>
                    <button onClick={Logout}>Logout</button>
                </div>
            ) : (
                <LoginA Login={Login} error={error}/>
            )}
        </div>
    );
}

export default FormLogin;