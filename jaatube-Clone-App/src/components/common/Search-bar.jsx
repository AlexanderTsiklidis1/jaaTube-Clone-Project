const URL = import.meta.env.VITE_BASE_API_URL
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ErrorMessage from "../errors/ErrorMessage";
import { getAllVideos } from "../../api/fetch";


// export function getAllVideos() {
//     return fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${URL}&q=${searchQ}=&type=video&part=snippet&maxResults=8`).then(res => res.json())
// }



export default function videosIndex() {
    const [loading, setLoadingError] = useState(false);
    const [videos, setVideos] = useState ([]);
    const [searchQ, setSearchQ] = useState()


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