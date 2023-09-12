import { useState  } from "react";
import { useNavigate } from "react-router-dom";
import "./CommentForm.css";

export  function commentForm() {
    const [comment, setComment] = useState({
        name: "",
        comment: "",
    });

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        setComment()
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
        
    
