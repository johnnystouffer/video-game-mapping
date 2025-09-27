import "../css/LeafletMap.css"
import { Link } from "react-router-dom";

const ProgressBar = ({ totalMarkers, completedMarkers, mapId }) => {
    return (totalMarkers > 0 && totalMarkers != 3) && (
        <div className="top-container">
            <div className="status-container">
                <Link to={`/progress/${mapId}`} id="bar-container">
                    <div id="actual-bar" style={{ width: `${(completedMarkers / totalMarkers) * 100}%` }}></div>
                </Link>
                <h3 id="status-text">{completedMarkers}/{totalMarkers}</h3>
            </div>
        </div>
    );

}

export default ProgressBar;