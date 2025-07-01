import { Link } from "react-router-dom";
import "../css/NotFound.css"

const NotFound = () => {
    return (            
        <div className='error-no-map-new'>
            <h1>ERROR: 404</h1>
            <h2>Map does not exist (yet). Go back to our home page.</h2>
            <Link to='/' className='home-but-new'><p>Home</p></Link>
        </div>);
}

export default NotFound;