import {Link} from 'react-router-dom'
import "./VideoListing.css";

export default function VideoListing({ video }) {
    return (
        <article className="video">
            <h3 className="title">
                {/* using the show prop here */}
                {/* the <Link /> is for a USER to click on */}
                <Link to="/videoShow">{video.snippet.title}
                <img src={video.snippet.thumbnails.default.url} alt="thumbnail" />
                </Link>
            </h3>
           
            <p className="description">{video.snippet.title}</p>
        </article>
    );
  }