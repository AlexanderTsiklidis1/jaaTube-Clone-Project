import { useState, useEffect, useParams, useNavigate } from "react"
import { getAllVideos, searchVideos } from "../../api/fetch";
// import VideoListing from "./VideoListing";
import "./Home.css";
import { Link } from "react-router-dom";

const KEY = import.meta.env.VITE_BASE_API_KEY
export default function Home() {
  const [searchQ, setSearchQ] = useState("");
  const [videos, setVideos] = useState ([]);
   
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
    getAllVideos(8)
    .then((videosJSON) => {
      setVideos(videosJSON.items)
    })
  },[searchQ, KEY])

const handleInputChange = (e) => {
  setSearchQ(e.target.value)
  console.log(searchQ)
}

    
    const youtubeArray = videos
    console.log(videos)
    return (
      <div>
        <div className= "searchBar">
          <input
            type="text"
            placeholder= "search video"
            value={searchQ}
            id="search"
            onChange={handleInputChange}
          />
          <button onClick={handleSearch}></button>
        </div>
        <section className="videos-index-wrapper">
          <section className="videos-index">
          {videos.length > 0 ? (
          videos.map((video) => (
            <section className="individualCard" key={video.etag}>
              <Link to={`/VideoShow/${video.etag}`}>
              <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
              </Link>
              <h3 className="title">{video.snippet.title}</h3>
            <p className="description">{video.snippet.title}</p>
            </section>
          ))
        ) : (
          <p className="non-search">
            No videos found. Try a different search term.
          </p>
        )}
          </section>
        </section>
      </div>
    );
  }
