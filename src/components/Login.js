import React from "react";
import {BsEye} from "react-icons/bs"
import 'bootstrap/dist/css/bootstrap.min.css'

class Login extends React.Component{
    constructor() {
        super();
        this.state = {
            username: "",
            password:""
        }
    }

    render() {
        return (
            <>
                <div className="container-fluid dark-blue-bg" id="login-container-div">
                    <div className="row">
                        <div className="col height40 d-flex justify-content-center align-items-end flex-wrap">
                            <div className="col d-flex justify-content-center align-items-end flex-wrap">
                                <h2 className="text-white font-16 mb-3" id="expense-manager">Expense Manager</h2>
                            </div>   
                        </div>
                        <hr className="rule"/>
                        <div className="col height60 d-flex align-items-start justify-content-center">
                          
                            <form className="mt-3">
                                <div id="div-for-username-hover">
                                <div className="bold">
                                   <label for="username" className="form-label login-input-label">Username</label> 
                                </div>
                                    <div className="mb-3">
                                        <input type="text" name="username" id="username" className="login-input"/>
                                    </div>
                                </div>
                                <div id="div-for-password-hover">
                                    <div for="pswd" className="bold"><label for="pswd" className="form-label login-input-label">Password</label></div>
                                    <div className="mb-4">
                                        <input type="password" name="pswd" id="pswd" className="login-input"/><button id="password-reveal-toggle-button"><BsEye/></button>
                                    </div>
                                </div>
                                    <div className="mt-3">
                                        <a href="/dashboard" className="button px-3 bold">Login</a>
                                    </div>
                                </form>
                            
                        </div>
                    </div>
                    
                </div>
            </>
        )
    }

}


export default Login