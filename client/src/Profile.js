import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Profile = () => {
    return ( 
        <div className="profile">
            <NavBar />
            <div className="container profile-container mt-5 bg-white shadow p-5">
                <div className="row px-5">
                    <div className="col-4">
                        <h4>Primary Email</h4>
                        <p>(Use paypal email)</p>
                    </div>
                    <div className="col">
                        <h4>Email@gmail.com</h4>
                        <Link to='#'>Change Email</Link>
                        
                    </div>
                </div>
                <hr/>

                <div className="row px-5">
                    <div className="col-4">
                        <h4>Name</h4>
                    </div>
                    <div className="col">
                        <h4>User Name</h4>
                        <Link to='#'>Change Name</Link>
                        
                    </div>
                </div>
                <hr/>
                <div className="row px-5">
                    <div className="col-4">
                        <h4>Username</h4>
                    </div>
                    <div className="col">
                        <h4>@username</h4>
                        <Link to='#'>Change Username</Link>
                        
                    </div>
                </div>
                <hr/>
                <div className="row px-5">
                    <div className="col-4">
                        <h4>Password</h4>
                    </div>
                    <div className="col">
                        <Link to='#'>Change Password</Link>
                        
                    </div>
                </div>
            </div>

            <div className="container bg-white profile-container mt-5 py-3 px-5 shadow">
                <div className="row ">
                    <div className="col-4 col-md-3 col-lg-2 ">
                        <h4 className="credit">My credit:</h4>
                    </div>
                    <div className="col-5 mr-auto">
                        <h4>225058 <span className="pt">Points</span><span className="dollar">/132.5$</span></h4>
                    </div>
                    <div className="col-3 ">
                        <from className="my-auto">
                            <button type="submit" class="btn btn-danger">Request Payment!</button>
                        </from>
                    </div>
                </div>

            </div>

        </div>
     );
}
 
export default Profile;