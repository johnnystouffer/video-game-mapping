function Card(props) {

    return (
        <div className='card-container'>
            <img src="" alt="" />
            <h2>{props.name}</h2>
            <h3>{props.game}</h3>
        </div>
    );
}

export default Card