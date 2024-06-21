import Maps from './assets/items.js'

function Card(props) {
    const map = Maps.find(m => m.id === props.mapId);

    return (
        <div className='card-container'>
            <img src="" alt="" />
            <h2>{map.name}</h2>
            <h3>{map.game}</h3>
        </div>
    );
}

export default Card