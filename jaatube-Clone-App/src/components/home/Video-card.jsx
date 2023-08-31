import React from "react";
import "./Video-card.css";

function VideoCard({
    title,
    image,
    channel,
    views,
}) {
    return (
        <div className = "videoCard">
            <img src={image} alt="" />
            <div className="videoCardDescription">
                <h3>{title}</h3>
                <p>{channel}</p>
                <p>{views}</p>
            </div>
        </div>
    )
}