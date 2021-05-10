import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { Verify } from "./Verify";

const MyTasks = () => {
    Verify();
    return (
        <div className="mytasks">
            <NavBar />
            <div className="container mt-5">
                <div className="row pt-5">
                    <div className="col">
                        
                        <div className="content-task bg-white p-4 shadow mb-5">
                            <Link to="/task">
                            <div className="row">
                                <div className="col-6 col-md-8 col-lg-9 col-xl-10 ">
                                    <h3>Create a post/meme that help us get to know 
                                    the community</h3>
                                </div>
                                <div className="col text-center">
                                    <h3 className="reward">Reward</h3>
                                    <h3 className="mt-4 points">2000</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 col-md-3 col-lg-2 mt-4 mt-md-2 text-center ml-3 inreview">
                                    <h5>In Review</h5>
                                </div> 
                            </div>
                            </Link>
                        </div>

                        <div className="content-task bg-white p-4 shadow mb-5">
                            <Link to="/task">
                            <div className="row">
                                <div className="col-6 col-md-8 col-lg-9 col-xl-10 ">
                                    <h3>Create a post/meme that help us get to know 
                                    the community</h3>
                                </div>
                                <div className="col text-center">
                                    <h3 className="reward">Reward</h3>
                                    <h3 className="mt-4 points">2000</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 col-md-3 col-lg-2 mt-4 mt-md-2 text-center ml-3 invalid">
                                    <h5>Invalid</h5>
                                </div> 
                            </div>
                            </Link>
                        </div>

                        <div className="content-task bg-white p-4 shadow mb-5">
                            <Link to="/task">
                            <div className="row">
                                <div className="col-6 col-md-8 col-lg-9 col-xl-10 ">
                                    <h3>Create a post/meme that help us get to know 
                                    the community</h3>
                                </div>
                                <div className="col text-center">
                                    <h3 className="reward">Reward</h3>
                                    <h3 className="mt-4 points">2000</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 col-md-3 col-lg-2 mt-4 mt-md-2 text-center ml-3 valid">
                                    <h5>Validated</h5>
                                </div> 
                            </div>
                            </Link>
                        </div>

                    {/* end */}
                    </div>
            </div>
        </div>
        </div>
     );
}
 
export default MyTasks;