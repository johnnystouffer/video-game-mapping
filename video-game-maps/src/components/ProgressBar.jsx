import "../css/LeafletMap.css"

const ProgressBar = ({ totalMarkers, completedMarkers }) => {
    return (totalMarkers > 0 && totalMarkers != 3) && (
        <div className="top-container">
            <div className="status-container">
                <h3 id="status-text">{completedMarkers}/{totalMarkers}</h3>
                <div id="bar-container">
                    <div id="actual-bar" style={{ width: `${(completedMarkers / totalMarkers) * 100}%` }}></div>
                </div>
                <h3>{((completedMarkers / totalMarkers) * 100).toLocaleString(undefined, { maximumFractionDigits: 2 })}%</h3>
            </div>
        </div>
    );

}

export default ProgressBar;