import { WindowSharp } from "@mui/icons-material";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div id="aboutPage" className="page">
      <div className="pageContent lazyLoad">
        <div className="pageContent_Center">
          <div className="pageTitle">
            <span>03. - About Me</span> <hr className="hrline" />
          </div>

          <div id="aboutSection">
            <div id="aboutImage">
              <img
                src="./src/img/placeholder_myself.webp"
                id="picOfMe"
                alt="Richard Szabo, owner of penguinweb.eu. Frontend developer."
              />
            </div>
            <div id="aboutDescription">
              <div id="educationSection">
                <h1>Education</h1>
                <h2>Codecool - Frontend</h2>
                <h3>2022 - 2023</h3>
                <p>
                  Highly intensive full-time and project oriented Frontend
                  programmer bootcamp.
                </p>
                <hr />
                <h2>Harvard CS50 | Udemy | LinkedIn Learn</h2>
                <h3>Ongoing</h3>
                <h4>More on my <span onClick={() => window.location.href = "https://www.linkedin.com/in/szabo-richard/"}>LinkedIn</span> profile.
                </h4>
              </div>
              <div id="hobbySection">
                <h1>Hobbies</h1>
                <span>
                  Gaming, traveling, learning, investing, programming.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
