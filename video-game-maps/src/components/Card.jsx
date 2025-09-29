import '../css/Card.css'
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
        <div className='link-container'>
            <Link to={href} className='card-link'>
                <div className={props.game !== 'IN PROGRESS' ? 'card-container' : 'game-card-not-available'} style={cardStyle}>
                    <div className='game-text-container'>
                        <h2>{props.name}</h2>
                        <h3>{props.game}</h3>
                    </div>
                </div>

            </Link>
        </div>
    );
}

export default Card