import './Card.css'
import { Link } from 'react-router-dom'

function Card(props) {

    const href = `/${props.id}`

    const cardStyle = {
        backgroundImage: `url(${props.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };

    return (
        <Link to={href}>

        <div className='card-container' style={cardStyle}>
            <div className='game-text-container'>
                <h2>{props.name}</h2>
                <hr />
                <h3>{props.game}</h3>
            </div>

        </div>

        </Link>
    );
}

export default Card