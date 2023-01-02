import { WindowSharp } from "@mui/icons-material";
import "./ProjectsPage.css";

function ProjectsPage() {
  return (
    <div id="projectPage" className="page">
      <div className="pageContent lazyLoad">
        <div className="pageContent_Center">
          <div className="pageTitle">
            <span>02. - My Projects</span> <hr className="hrline" />
          </div>

          <div id="projectSection">
            <div className="projectRow">
              <img
                src="./src/img/Spotify_Visualizer.webp"
                alt="Placeholder"
                onClick={() =>
                  (window.location.href = "https://spotify-profile-visualizer-app.vercel.app/")
                }
              />
              <div className="projectDescription">
                <h1>Spotify Visualizer WebApp</h1>
                <h2>React, Styled Components, ExpressJS, SpotifyAPI</h2>
                <p>
                  Complete Spotify profile visualizer webapp using the SpotifyAPI. Here you can check your toplists, followed artists, recent played songs and your playlists as well. Login with by just one click with your Spotify account and check it out.
                </p>
                <button
                  onClick={() =>
                    (window.location.href = "https://spotify-profile-visualizer-app.vercel.app/")
                  }
                >
                  Live Demo
                </button>
              </div>
            </div>

            {/*  <div className="projectRow">
      <div className="projectDescription">
          <h1>ToDo App</h1>
          <h2>HTML5, CSS3, React, ExpressJS</h2>
          <p>Are you a busy man? Then this app is made for you! You can write down and track your todos. Also you are able to organize them based on urgency.</p>
        </div>
        <img src="./src/img/placeholder.webp" alt="Placeholder" />
        
      </div> */}

            <button
              id="projectsSeeMoreButton"
              onClick={() =>
                alert(
                  "Coming Soon. I'm working on large scale portfolio projects, and those are takes a quite of time to make. :)"
                )
              }
            >
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
