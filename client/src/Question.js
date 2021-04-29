import { Link } from "react-router-dom";

const Question = () => {
    return ( 
        <div className="tasks mt-5">
            <div className="container pt-5">
                <div className="row">

                    <div className="col-9 mx-auto">
                        
                        <div className="content-task bg-white p-4 shadow mb-5">
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
                                <div className="col mt-3">
                                <p>Question Question Question Question Question Question Question Question Question Question Question Question Question Question
                                Question Question Question Question Question Question Question Question Question Question Question Question Question Question
                                Question Question Question Question Question Question Question Question Question Question Question Question Question Question
                                Question Question Question Question Question Question Question Question Question Question Question Question Question Question
                                Question Question Question Question Question Question Question Question Question Question Question Question Question Question
                                Question Question Question Question Question Question Question Question Question Question Question Question Question Question
                                </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 col-md-3 col-lg-2 mt-4 mt-md-2 text-center ml-3 topicx">
                                    <h5>Javascript</h5>
                                </div> 
                            </div>
                        </div>

                        <div className="content-task bg-white p-4 shadow mb-5">
                           
                            <from>
                                <div className="row">
                                    <div className="col-11">
                                        <input className="form-control" type="text" id="repo" placeholder="Send Your Github Repo!" />
                                    </div>
                                    
                                    <div className="col p-0">
                                    <button type="submit" class="btn btn-danger">Send</button>
                                    </div>
                                    
                                </div>
                                
                            </from>

                        </div>

                    {/* end */}
                    </div>
     
                </div>
                
            </div>
        </div>
     );
}
 
export default Question;