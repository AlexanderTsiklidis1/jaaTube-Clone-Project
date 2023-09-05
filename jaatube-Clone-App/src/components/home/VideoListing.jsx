import {Link} from 'react-router-dom'
import "./VideoListing.css";

export default function VideoListing({ video }) {
    return (
      <article className="video">
        <h3 className="title">
          {/* using the show prop here */}
          {/* the <Link /> is for a USER to click on */}
          <Link to={`/shows/${video.id}`}>{video.title}</Link>
        </h3>
        <p className="description">{video.description}</p>
        <aside className="thumbnail">
          <p>
            <span>Listed Categories:</span>
            {video.thumbnails}
          </p>
          <p>
            <span>Duration:</span> {show.duration}
          </p>
        </aside>
      </article>
    );
  }