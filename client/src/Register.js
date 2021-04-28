import { Link } from "react-router-dom";
import logosignup from './img/signup.jpg';

const Register = () => {
    return ( 
        <div className="register pt-5">
            <h1 className="text-center mt-5 pb-5"><span className="l">L</span>earn</h1>

            <div className="container shadow p-5 rounded mt-5 bg-white">
                <div className="row">

                    <div className="col-12 col-md-6 mb-5 mb-md-0">

                        <form className=" mx-auto">
                            <h2 className="my-4">Sign Up</h2>
                            
                            <div className="row form-group">
                                <div className="col">
                                    <label for="usernmae">Username</label>
                                    <input type="text" className="form-control" id="username" placeholder="Enter username" />    
                                </div>

                                <div className="col">
                                    <label for="usernmae">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter email" />    
                                </div>
                                                                    
                            </div>
                            <div className="row form-group">
                                <div className="col">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Password" />  
                                </div>
                                
                                <div className="col">
                                    <label for="exampleInputPassword1">Confirm Password</label>
                                    <input type="password" className="form-control" id="confirmPassword" placeholder="Password" />  
                                </div>
                            </div>      
                            <button type="submit" className="btn btn-primary mt-4">Register</button>                            
                        </form>
                    </div>

                    <div className="col-12 text-center col-md-6">
                        <div className="mt-4">
                            <img src={logosignup} alt="login image"/>
                        </div>
                        
                        <div className="mt-4 create-account">
                            <Link to="/">Already Member?</Link>
                        </div>
                        
                    </div>

                </div>
                
            </div>
            <div className="test"></div>
        </div>
     );
}
 
export default Register;