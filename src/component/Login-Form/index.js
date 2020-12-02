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
        <div>
            {(user.email !== "") ? (
                <div>
                    <h2>Welcome, <span>{user.name}</span></h2>
                    <input type="submit" value="Logout" onClick={Logout}/>
                </div>
            ) : (
                <LoginA Login={Login} error={error}/>
            )}
        </div>
    );
}

export default FormLogin;