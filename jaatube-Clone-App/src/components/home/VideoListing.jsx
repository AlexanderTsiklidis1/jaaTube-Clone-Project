import {Link} from 'react-router-dom'
import "./VideoListing.css";

export default function VideoListing({ video }) {
    return (
        <article className="video">
            <Link to="/videoShow">
                <img src={video.snippet.thumbnails.default.url} alt="thumbnail" />
                <h3 className="title">{video.snippet.title}</h3>
            </Link>
            <p className="description">{video.snippet.title}</p>
        </article>
    );
  }