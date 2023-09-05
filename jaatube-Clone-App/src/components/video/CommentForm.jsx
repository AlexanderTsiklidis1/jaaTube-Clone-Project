import { useState  } from "react";
import { createShow } from "../../api/fetch";
import { useNavigate } from "react-router-dom";
import "./CommentForm.css";

export default function commentForm() {
    const [comment, setComment] = useState({
        name: "",
        comment: "",
    });

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        createComment()
    }

    function handleTextChange(event) {
        setComment({
            ...comment,
            [event.target.id]: event.target.value
        })
    }
    return(
        
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={comment.name}
                onChange={handleTextChange}
                placeholder="Name..."
              />
        
              <label htmlFor="comment">Comment</label>
              <input
                type="text"
                id="comment"
                value={comment.description}
                onChange={handleTextChange}
                placeholder="..."
              />
              
              <br />

                <input type="submit" />
            </form>
          );
        }
        
    
