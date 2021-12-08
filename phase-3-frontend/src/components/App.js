
import SongCard from './SongCard'
import React, {useState, useEffect} from 'react'
import AddReview from './AddReview'

//move useState to app so that each Song can has it's own set of reviews and ratings
//will need to reconfigure db.json so reviews and ratings are keys on each Song


function App() {

  const [songList, setSongList] = useState([])

  useEffect(() => {
      fetch(`http://localhost:6001/songs`)
      .then(res => res.json())
      .then(data => setSongList(data))

      
  }, [])

  
  const displaySongs = songList.map(song => <SongCard key={song.id} songList={songList} song={song} />)


  return (
    <div className="App">
      {displaySongs}
    
    </div>
  );
}

export default App;
