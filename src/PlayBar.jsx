export default function PlayBar() {
    function handlePlayClick() {
        alert('Reproduciendo...');
    }
  return (
    <>
    <div className="play-bar-container">

        <input type="range" className="play-bar-slider" />

        <div className="play-bar-button">
            ⏪
        </div>
        <div className="play-bar-button" onClick={handlePlayClick}>
            ▶️
        </div>
        <div className="play-bar-button">
            ⏩
        </div>
      </div>
    </>
  )
}