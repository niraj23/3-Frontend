
import SongCard from './SongCard'
import React, {useState, useEffect} from 'react'
import AddReview from './AddReview'


function App() {

  const [songList, setSongList] = useState([])
  
  
  const displaySongs = songList.map(song => <SongCard key={song.id} songList={songList} song={song} reviews={song.reviews} /> )

  useEffect(() => {
      fetch(`http://localhost:6001/songs`)
      .then(res => res.json())
      .then(data => setSongList(data))

      
  }, [])

  
  return (
    <div className="App">
      {displaySongs}
    
    </div>
  );
}

export default App;
