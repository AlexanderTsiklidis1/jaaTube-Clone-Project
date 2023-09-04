import { useState  } from "react";
import { createShow } from "../../api/fetch";
import { useNavigate } from "react-router-dom";
import "./CommentForm.css";

export default function commentsForm() {
    const [comment, setComment] = useState({
        name: "",
        comment: "",
    });

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        createComment()
    }
}