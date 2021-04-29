import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Tasks from './Tasks';

const Home = () => {
    return ( 
        <div className="home">
            <NavBar />
            <Tasks/>
        </div>
     );
}
 
export default Home;