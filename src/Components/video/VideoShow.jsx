import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./VideoShow.css";
// import ErrorMessage from "../errors/ErrorMessage";
import { getOneVideo } from "../../api/fetch";
// Import CommentForm when needed

export default function VideoShow(video) {
    const [individual, setIndividual] = useState([]); // Initialize as null
  const { id } = useParams();
    // console.log(id)

    useEffect(() => {
        getOneVideo(id,1)
          .then((data) => {
            setIndividual(data); // Set the entire video object
            console.log(data);
          })
          .catch((error) => {
            console.error('Error fetching video:', error);
          });
      }, [id]);

      const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (name.trim() === "" || comment.trim() === "") {
      alert("Name and comment cannot be empty!");
      return;
    }
    const newComment = { name, comment };
    setComments([...comments, newComment]);
    setName("");
    setComment("");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="videoShow">
            {individual.length > 0 ? (
              individual.map((videoInfo) => (
                <section
                  className="individualVideoCard mb-4"
                  key={videoInfo.etag}
                >
                  <h1 className="videoName">{videoInfo.snippet.title}</h1>
                  <div className="videoImage">
                    <img
                      src={videoInfo.snippet.thumbnails.high.url}
                      alt={videoInfo.snippet.title}
                      className="img-fluid"
                    />

                  </div>
                </section>
              ))
            ) : (
              <p className="non-search">No video found. Try a different video</p>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-container">
            <h2 className="commentTitle">Leave a Comment On This Video</h2>
            <div className="mb-3">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Name"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control mb-2"
                placeholder="Add a comment"
                value={comment}
                onChange={handleCommentChange}
              />
            </div>
            <button
              className="btn btn-primary"
              onClick={handleCommentSubmit}
            >
              Add Comment
            </button>
            <div>
              <h2 className="commentTitle">Comments:</h2>
              {comments.map((c, index) => (
                <div key={index} className="mb-2">
                  <strong>{c.name}</strong>: {c.comment}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
