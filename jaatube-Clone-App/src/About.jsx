import React from "react";
import "./About.css";
import Alex from "./assets/alex.jpeg";
import Jalal from "./assets/jalal.png";
import Aisha from "./Users/aishakleemoff/10-2/Mod-3/Mod-3-projects/jaaTube-Clone-Project/jaatube-Clone-App/src/assets/aisha.jpeg";

export default function About() {
  return (
    <>
      <div className="aboutContainer">
        <h1>Our Team</h1>
        <section className="description">
          <h2>Description of our Project</h2>
          <p>
            In this project our team created a YouTube clone that allows a user
            to search for videos using the YouTube API. A user can select videos
            and watch them. This project is a collaborative effort that includes
            three claamates using our knowledge of design and React.
          </p>
        </section>
      </div>
    </>
  );
}
