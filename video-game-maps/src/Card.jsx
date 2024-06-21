 import './Card.css'

function Card(props) {

    const altText = `${props.name} Picture`;

    return (

        <div className='card-container'>
            
            <div className='image-container'>
                <img src={props.image} alt={altText} /> 
            </div>
            <div className='gane-text-container'>
                <h2>{props.name}</h2>
                <hr />
                <h3>{props.game}</h3>
            </div>

        </div>
    );
}

export default Card