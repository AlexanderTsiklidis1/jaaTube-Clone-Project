// gitimport React from "react";
import React from "react";
import "./About.css";

// import Alex from "./assets/alex.jpeg";
// import Jalal from "./assets/jalal.png";
import Aisha from "../../assets/aisha.jpeg";

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
        <ul className="team-Cards">
          <div display>
            <li className="team-card">
              <h3>Jalal Jonaid</h3>
              <img src={"./assets/jalal.png"} alt="Jalal" height="250px" />
              <a href="https://github.com/JalalJonaid"></a>
              <p>
                Jalal Jonaid has studied Computer Science, Digital Marketing and
                he is also a Full Stack Developer{" "}
              </p>
            </li>
            <li className="team-card">
              <h3>Alexander Tsiklidis</h3>
              <img src="./assets/alex.jpeg" alt="Alex" height="250px" />
              <a href="https://github.com/AlexanderTsiklidis"></a>
              <p>
                Alexander Tsiklidis is a Software developer with an interest in
                improving world infrastructure.
              </p>
            </li>
            <li className="team-card">
              <h3>Aisha Kleemoff</h3>
              <img src={Aisha} alt="Aisha" height="250px" />
              <a href="https://github.com/AishaCKleemoff"></a>
              <p>
                Aisha Kleemoff is a Software Engineer, Fellow at the Pursuit
                Fellowship! When Aisha is not programming, she loves to bake and
                crochet!
              </p>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
}
