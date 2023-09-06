import { useState, useEffect, useParams, useNavigate } from "react"
import { getAllVideos, searchVideos } from "../../api/fetch";
import VideoListing from "./VideoListing";
import "./Home.css";
const URL = import.meta.env.VITE_BASE_API_URL
export default function Home() {

  const [searchQ, setSearchQ] = useState("");
  const [videos, setVideos] = useState ([]);
  const [isEmptySearch, setIsEmptySearch] = useState(false);
  
  
  function handleSearch() {
    if (searchQ.trim() !== "") {
      searchVideos(searchQ)
        .then((result) => {
          if (result && result.items) {
            setVideos(result.items);
          }
        })
        .catch((error) => {
          console.error("Error fetching videos:", error);
        });
    }
  }
  useEffect(() => {
    getAllVideos()
    .then((videosJSON) => {
      setVideos(videosJSON.items)
    })
  },[searchQ, URL])

const handleInputChange = (e) => {
  setSearchQ(e.target.value)
  console.log(searchQ)
}

    
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
