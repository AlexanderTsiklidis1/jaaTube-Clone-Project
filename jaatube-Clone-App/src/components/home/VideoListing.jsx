import {Link} from 'react-router-dom'
import "./VideoListing.css";

export default function VideoListing({ video }) {
    return (
        <article className="video">
            <img src={video.snippet.thumbnails.default.url} alt="thumbnail" />
            <h3 className="title">{video.snippet.title}
               <Link to="/videoShow"></Link>
            </h3>
            <p className="description">{video.snippet.title}</p>
        </article>
    );
  }