import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { Verify } from "./Verify";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import jwt_decode from "jwt-decode";
import axios from 'axios';

const Profile = () => {
    Verify();
    const [email, SetEmail] = useState('');
    const [name, SetName] = useState('');
    const [username, SetUsername] = useState('');
    const [password, SetPassword] = useState('');
    const [showEmail, setShowEmail] = useState(false);
    const handleCloseEmail = () => setShowEmail(false);
    const handleShowEmail = () => setShowEmail(true);

    const [showName, setShowName] = useState(false);
    const handleCloseName = () => setShowName(false);
    const handleShowName = () => setShowName(true);

    const [showUsername, setShowUsername] = useState(false);
    const handleCloseUsername = () => setShowUsername(false);
    const handleShowUsername = () => setShowUsername(true);

    const [showPassword, setShowPassword] = useState(false);
    const handleClosePassword = () => setShowPassword(false);
    const handleShowPassword = () => setShowPassword(true);

    const [data, setData] = useState('');


    let token = localStorage.getItem('user');
    let decoded = jwt_decode(token);

    useEffect(() => {
        axios({
            method: 'post',
            url: 'http://localhost:5000/updateUserDetails',
            data: {id : decoded.id}
            }).then((res) => {
                // console.log(res.data)
                setData(res.data);
                SetEmail(res.data.email);
                SetName(res.data.name);
                SetName(res.data.username);
                SetName(res.data.password);
            }).catch(err => console.log(err.message));
      }, []);
    
    

    const handleForm = () => {
        
        const data = {id: decoded.id, email, name, username, password };
        console.log(data)
        axios({
            method: 'post',
            url: 'http://localhost:5000/update',
            data: data
            }).then((res) => {        
            }).catch(err => console.log(err.message));
    };

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
                        <h4>{data.email}</h4>
                        <Button variant="danger" onClick={handleShowEmail}>
                            Change email
                        </Button>
                        
                    </div>
                </div>
                <hr/>

                <div className="row px-5">
                    <div className="col-4">
                        <h4>Name</h4>
                    </div>
                    <div className="col">
                        <h4>{data.name}</h4>
                        <Button variant="danger" onClick={handleShowName}>
                            Change name
                        </Button>
                        
                    </div>
                </div>
                <hr/>
                <div className="row px-5">
                    <div className="col-4">
                        <h4>Username</h4>
                    </div>
                    <div className="col">
                        <h4>@{data.username}</h4>
                        <Button variant="danger" onClick={handleShowUsername}>
                            Change username
                        </Button>
                        
                    </div>
                </div>
                <hr/>
                <div className="row px-5">
                    <div className="col-4">
                        <h4>Password</h4>
                    </div>
                    <div className="col">
                    <Button variant="danger" onClick={handleShowPassword}>
                            Change password
                    </Button>
                        
                    </div>
                </div>

               {/* Modal for email*/}
             
                <Modal
                    show={showEmail}
                    onHide={handleCloseEmail}
                    backdrop="static"
                    keyboard={false}
                >   <form onSubmit={e => handleForm(e)}>
                    <Modal.Header closeButton>
                    <Modal.Title>Change email</Modal.Title>
                    
                    </Modal.Header>
                    <Modal.Body>
                    <div className="form-group">
                        <label for="email">New email address</label>
                        <input type="email" class="form-control" id="email" name="email" aria-describedby="emailHelp" 
                        required
                        value={email}
                        onChange={(e) => SetEmail(e.target.value)}
                        />
                    </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseEmail}>
                        Close
                    </Button>
                    <Button variant="danger" type="submit">Submit</Button>
                    </Modal.Footer>
                    
                    </form>
                </Modal>

                {/* end model for email */}

                {/* Modal for name*/}
             
                <Modal
                    show={showName}
                    onHide={handleCloseName}
                    backdrop="static"
                    keyboard={false}
                >   <form onSubmit={handleForm}>
                    <Modal.Header closeButton>
                    <Modal.Title>Change name</Modal.Title>
                    
                    </Modal.Header>
                    <Modal.Body>
                    <div className="form-group">
                        <label for="name">New name</label>
                        <input type="text" class="form-control" id="name" required
                        value={name}
                        onChange={(e) => SetName(e.target.value)}
                        />
                    </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseName}>
                        Close
                    </Button>
                    <Button variant="danger" type="submit">Submit</Button>
                    </Modal.Footer>
                    
                    </form>
                </Modal>

                {/* end model for name */}

                {/* Modal for username*/}
             
                <Modal
                    show={showUsername}
                    onHide={handleCloseUsername}
                    backdrop="static"
                    keyboard={false}
                >   <form>
                    <Modal.Header closeButton>
                    <Modal.Title>Change username</Modal.Title>
                    
                    </Modal.Header>
                    <Modal.Body>
                    <div className="form-group">
                        <label for="username">New username</label>
                        <input type="text" class="form-control" id="username" 
                        onChange={(e) => SetUsername(e.target.value)} 
                        required/>
                    </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseUsername}>
                        Close
                    </Button>
                    <Button variant="danger">Submit</Button>
                    </Modal.Footer>
                    
                    </form>
                </Modal>

                {/* end model for username */}

                {/* Modal for password*/}
             
                <Modal
                    show={showPassword}
                    onHide={handleClosePassword}
                    backdrop="static"
                    keyboard={false}
                >   <form>
                    <Modal.Header closeButton>
                    <Modal.Title>Change password</Modal.Title>
                    
                    </Modal.Header>
                    <Modal.Body>
                    <div className="form-group">
                        <label for="password">New password</label>
                        <input type="password" class="form-control" id="password"
                        onChange={(e) => SetPassword(e.target.value)} required/>
                        <label for="password" className="mt-3">Confirm password</label>
                        <input type="password" class="form-control" id="passwordtwo" required/>
                    </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClosePassword}>
                        Close
                    </Button>
                    <Button variant="danger">Submit</Button>
                    </Modal.Footer>
                    
                    </form>
                </Modal>

                {/* end model for password */}

                
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