import './Card.css'

function Card(props) {

    const href = `${props.id}`


    const cardStyle = {
        backgroundImage: `url(${props.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };

    return (
        <a key={props.game} href={href}>

        <div className='card-container' style={cardStyle}>
            <div className='game-text-container'>
                <h2>{props.name}</h2>
                <hr />
                <h3>{props.game}</h3>
            </div>

        </div>

        </a>
    );
}

export default Card