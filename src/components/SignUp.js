import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import firebaseConfig from "../config";

const SignUp = () => {
    const [currentUser,setCurrentUser] = useState();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const {email,password} = e.target.elements;

        try {
            firebaseConfig.auth().createUserWithEmailAndPassword(email.value, password.value);
            setCurrentUser(true);
        } catch(error){
            alert(error);
        }
    }
    if (currentUser){
        return <Redirect to="/Home" />
    }

    return (
        <>
          <form>
              <div className="mb-3">
                  <label for="exampleInputEmail" className="forn-label">Email address</label>
                  <input type="email" name="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" />
                  <div id="emailHelp" className="form-text">We'll naver share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                  <label for="exampleInputPassword" className="forn-label">Password</label>
                  <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
              </div>
              <button type="submit" className="btn btn-primaary">Login</button>
        
          </form>

        </>
    )
}
export default SignUp;