import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./VideoShow.css";
import ErrorMessage from "../errors/ErrorMessage";
import { getOneVideo } from "../../api/fetch";
import {commentForm} from "./CommentForm";

export default function VideoShow() {
    const [video, setVideo] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getOneVideo(id)
        .then((videoData) => {
            setVideo(videoData.items);
        }
    )})
    
}
return(
    <div>
        <div className="videoShow">
            <img src= {video.etag.snippet.thumbnails.high.url} />
            <h2 className="title">{video.etag.snippet.title}</h2>
        </div>
        <div>
            <commentForm />
        </div>
    </div>

)