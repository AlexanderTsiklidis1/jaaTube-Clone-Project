import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./ShowVideo.css";
import ErrorMessage from "../errors/ErrorMessage";
import { getOneVideo } from "../../api/fetch";

function VideoShow() {
    const [video, setVideo] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getOneVideo(id)
        .then((videoData) => {
            setVideo(videoData);
            if (Object.keys(showData).length === 0) {
                setLo
            }
        })
    })
}