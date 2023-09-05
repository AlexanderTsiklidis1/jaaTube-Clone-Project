import React, { useEffect } from "react"
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
        <div></div>
    )
}
