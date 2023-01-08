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
                alt="Portfolio work. Spotify profile visualizer."
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

            <div className="projectRow">
      <div className="projectDescription">
          <h1>Todo App</h1>
          <h2>VueJS, Typescript, Styled Components</h2>
          <p>In this app you can add and track your todos. Everything you add or delete is saved on server side. Give it a try by clicking on the "Live Demo" button.</p>
          <button
                  onClick={() =>
                    (window.location.href = "https://polite-shortbread-85d94b.netlify.app/")
                  }
                >
                  Live Demo
                </button>
        </div>
        <img src="./src/img/todoApp_VueJS.webp" alt="Portfolio work. Todo App written in VueJS." onClick={() =>
                    (window.location.href = "https://polite-shortbread-85d94b.netlify.app/")
                  } />
        
      </div>

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
