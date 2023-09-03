import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ErrorMessage from "../errors/ErrorMessage";
import { getAllVideos } from "../../api/fetch";

export default function videosIndex() {
    const [loading, setLoadingError] = useState(false);
    const [videos, setVideos] = useState ([]);


useEffect(() => {
    getAllVideos()
    .then((videosJson) => {
        setVideos(videosJson)
        setLoadingError(false)
    })

    .catch((err) => {
        setLoadingError(true);
        console.error(err)
    })
},[])

return (
    
    );
  }