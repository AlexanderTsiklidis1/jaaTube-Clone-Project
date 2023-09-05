import { useState, useEffect } from "react"
import { getAllVideos } from "../../api/fetch";
import VideoListing from "./VideoListing";
import "./Home.css";

export default function Home() {
const [searchQ, setSearchQ] = useState("");
useEffect
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
          <section className="videos-index-wrapper">
            <h2></h2>
            <section className="videos-index">
             { videos.map((video) => {
              return <VideoListing video = {video} key = {video.id}/>
            })}
            
            </section>
          </section>
        </div>
    )
}
