import React from "react"
import { Link, useParams, useNavigate } from "react-router-dom";
import "/Home.css";

export default function Home() {
  const [video, setVideo] = useState({});
  const { id } = useParams();

  const navigate = useNavigate();
  
    return (
        <div>
      <article className="video"></article>
    </div>
    )
}