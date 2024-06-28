import './Card.css'

function Card(props) {

    const href = `${props.id}`
    const name = `Go to ${props.name}'s map!`

    const cardStyle = {
        backgroundImage: `url(${props.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };

    return (
        <a href={href} title={name}>

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