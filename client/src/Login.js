import { Link } from 'react-router-dom';
import logo from './img/login.jpg';


const Login = () => {
    return ( 
        <div className="login pt-5">
            <h1 className="text-center mt-5 pb-5"><span className="l">L</span>earn</h1>

            <div className="container containerls shadow p-5 rounded mt-5 bg-white">
                <div className="row">
                    <div className="col-12 text-center order-last order-md-first col-md-6">
                        <div className="mt-4">
                            <img src={logo} alt="login image"/>
                        </div>
                        
                        <div className="mt-4 create-account">
                            <Link to="/register">Creat Account</Link>
                        </div>
                        
                    </div>

                    <div className="col-12 col-md-6 mb-5 mb-md-0">

                        <form className="w-75 mx-auto">
                            <h2 className="my-4">Login</h2>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />                 
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>      
                            <button type="submit" className="btn btn-primary float-right mt-4">Login</button>                            
                        </form>

                    
                    </div>
                </div>
                
            </div>
            <div className="test"></div>

        </div>
     );
}
 
export default Login;