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
                src="./src/img/food_factory.webp"
                alt="Placeholder"
                onClick={() =>
                  (window.location.href = "http://portfolioworks.ddns.net/")
                }
              />
              <div className="projectDescription">
                <h1>Restaurant App | FoodFactory</h1>
                <h2>HTML5, CSS3/SASS, React, ExpressJS</h2>
                <p>
                  Complete restaurant app with a fully functional backend. The
                  menu is fully dynamic, the site handles bookings and orders as
                  well. The restaurant on it's admin page is able to manage
                  everything.
                </p>
                <button
                  onClick={() =>
                    (window.location.href = "http://portfolioworks.ddns.net/")
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
