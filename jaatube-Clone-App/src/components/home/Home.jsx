import React, { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom";
import { getAllVideos } from "../../api/fetch";
import VideoListing from "./VideoListing";

//import "/Home.css";

export default function Home() {

  const [videos, setVideos] = useState ([1]);
  
    useEffect(() => {
      getAllVideos()
      .then((videosJSON) => {
        setVideos(videosJSON)
      })
    },[])

    return (
        <div>
          <section className="videos-index-wrapper">
            <h2>Videos</h2>
            <section className="videos-index">
             {console.log(videos)}
             { (videos.items).map((video) => {
              return <VideoListing video = {video} key = {video.id}/>
            })}
            
            </section>
          </section>
        </div>
    )
}
