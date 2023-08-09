import "./Register.css";
import React from "react";

const register=()=>{
    return(
        <div>
            <div className="row">
                <div className="col-md-12 text-center"><h1>Register</h1> </div>
            </div>
            <div className="row">
                  <div className="col-md-6">First Name</div>  
                  <div className="col-md-6">
                    <input type="text" name="first_name" />
                  </div>
            </div>
            <div className="row">
                  <div className="col-md-6">Last Name</div>  
                  <div className="col-md-6">
                    <input type="text" name="last_name" />
                  </div>
            </div>
            <div className="row">
                  <div className="col-md-6"> Email</div>  
                  <div className="col-md-6">
                    <input type="email" name="email"/>
                  </div>
            </div>
            <div className="row">
                  <div className="col-md-6">Password</div>  
                  <div className="col-md-6">
                    <input type="password" name="password" />
                  </div>
            </div>
            <div className="row">
                  
                  <div className="col-md-12 text-center">
                    <input type="submit" name="submit" value="Register" />
                    
                  </div>
            </div>
        </div>
    )
}
export default register;