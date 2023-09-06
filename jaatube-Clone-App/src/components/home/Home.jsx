import { useState, useEffect } from "react"
import { getAllVideos, searchVideos } from "../../api/fetch";
import VideoListing from "./VideoListing";
import "./Home.css";

export default function Home() {

  const [searchQ, setSearchQ] = useState("");
  
  function handleSearch() {
    const search = searchVideos(searchQ)
  }
const handleInputChange = (e) => {
  setSearchQ(e.target.value)
  console.log(searchQ)
}

  const [videos, setVideos] = useState ([]);
    useEffect(() => {
      getAllVideos()
      .then((videosJSON) => {
        setVideos(videosJSON.items)
      })
    },[])
    
    const youtubeArray = videos.items
    console.log(videos)
    console.log(videos.items)
    return (
        <div>
          <div className= "searchBar">
            <input type="text" 
              placeholder= "search video"
              value={searchQ}
              id="search"
              onChange= {handleInputChange}
              />
              <button onClick= {handleSearch}></button>
          </div>
          <section className="videos-index-wrapper">
          <section className="videos-index">
             { videos.map((video) => {
              return <VideoListing video = {video} key = {video.id}/>
            })}
            
            </section>
          </section>
        </div>
    )
}
