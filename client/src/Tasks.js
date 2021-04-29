import { Link } from "react-router-dom";

const Tasks = () => {
    return ( 
        <div className="tasks mt-5">
            <div className="container pt-5">
                <div className="row">
                    <div className="col-3 d-none d-md-block">

                        <ul className="list-topics">
                            <li><Link to="#">All</Link></li>
                            <li><Link to="#">Python</Link></li>
                            <li><Link to="#">JavaScript</Link></li>
                            <li><Link to="#">C#</Link></li>
                            <li><Link to="#">PHP</Link></li>
                            <li><Link to="#">React</Link></li>
                            <li><Link to="#">Swift</Link></li>
                        </ul>
                    </div>

                    <div className="col-9 ">
                        
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
                                <div className="col-6 col-md-3 col-lg-2 mt-4 mt-md-2 text-center ml-3 topicx">
                                    <h5>Javascript</h5>
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
 
export default Tasks;