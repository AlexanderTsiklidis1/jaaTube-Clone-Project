import { useState, useEffect } from "react"
import { getAllVideos } from "../../api/fetch";
import VideoListing from "./VideoListing";
import "./Home.css";

export default function Home() {

  const [videos, setVideos] = useState ([]);
  
    useEffect(() => {
      getAllVideos()
      .then((videosJSON) => {
        setVideos(videosJSON)
      })
    },[])
    const youtubeArray = videos.items
    console.log(videos.items)
    return (
        <div>
          <section className="videos-index-wrapper">
            <h2>Videos</h2>
            <section className="videos-index">
             {console.log(videos)}
             
             {/* { youtubeArray.map((video) => {
              return <VideoListing video = {video} key = {video.id}/>
            })} */}
            
            </section>
          </section>
        </div>
    )
}
