import React, { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom";
import { getAllVideos } from "../../api/fetch";
//import "/Home.css";

export default function Home() {

  const [videos, setVideos] = useState ([]);
  
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
            <section className="shows-index">
             {console.log(videos)}
             
            
            </section>
          </section>
        </div>
    )
}
