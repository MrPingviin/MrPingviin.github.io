import "./LandingPage.css";
import { AiOutlineMenu } from "react-icons/ai";
import { RiCloseCircleFill } from "react-icons/ri";

function LandingPage() {
  const mobileMenuOpener = () => {
    const target = document.querySelector("#mobile-menu");
    target.style.display = "flex";
    target.classList.add("mobile-menu-popup");
  };

  const mobileMenuCloser = () => {
    const target = document.querySelector("#mobile-menu");
    target.classList.remove("mobile-menu-popup");
    target.style.display = "none";
  };

  return (
    <div id="landingPage" className="page">
      <div id="mobile-menu" className="mobile">
        <div id="mobile-menu-content">
          <RiCloseCircleFill
            fill="#F5333F"
            id="mobile-menu-close-icon"
            onClick={mobileMenuCloser}
          />
          <div id="mobile-menu-title-section">
            <h1>Penguinweb</h1>
            <h2>Menu</h2>
          </div>

          <ul id="mobile-menu-main-section">
            <li
              id="homeOption-mobile"
              onClick={() => {
                (window.location.href = "#landingPage"), mobileMenuCloser();
              }}
            >
              00. Home
            </li>
            <li
              id="skillOption-mobile"
              onClick={() => {
                (window.location.href = "#skillsPage"), mobileMenuCloser();
              }}
            >
              01. My Skills
            </li>
            <li
              id="projectsOption-mobile"
              onClick={() => {
                (window.location.href = "#projectPage"), mobileMenuCloser();
              }}
            >
              02. Projects
            </li>
            <li
              id="aboutOption-mobile"
              onClick={() => {
                (window.location.href = "#aboutPage"), mobileMenuCloser();
              }}
            >
              03. About
            </li>
            <li
              id="contactOption-mobile"
              onClick={() => {
                (window.location.href = "#contactPage"), mobileMenuCloser();
              }}
            >
              04. Contact
            </li>
            <li>
              <button
                id="resumeButton-mobile"
                onClick={() =>
                  (window.location.href =
                    "https://penguinweb.eu/Richard-Szabo-Frontend-Developer-CV.pdf")
                }
              >
                Resume
              </button>
            </li>
          </ul>
        </div>
      </div>
      <nav>
        <div id="navbar">
          <div id="navbar-content">
            <div id="logoSection">
              <span className="hidden">EN</span>
              <span onClick={() => (window.location.href = "#landingPage")}>
                Penguin Web
              </span>
              <AiOutlineMenu id="mobile-menu-icon" onClick={mobileMenuOpener} />
            </div>
            <div id="navSelectionSection">
              <ul id="navOptions">
                <li
                  id="homeOption"
                  onClick={() => (window.location.href = "#landingPage")}
                >
                  00. Home
                </li>
                <li
                  id="skillOption"
                  onClick={() => (window.location.href = "#skillsPage")}
                >
                  01. My Skills
                </li>
                <li
                  id="projectsOption"
                  onClick={() => (window.location.href = "#projectPage")}
                >
                  02. Projects
                </li>
                <li
                  id="aboutOption"
                  onClick={() => (window.location.href = "#aboutPage")}
                >
                  03. About
                </li>
                <li
                  id="contactOption"
                  onClick={() => (window.location.href = "#contactPage")}
                >
                  04. Contact
                </li>
              </ul>
              <button
                id="resumeButton"
                onClick={() =>
                  (window.location.href =
                    "https://penguinweb.eu/Richard-Szabo-Frontend-Developer-CV.pdf")
                }
              >
                Resume
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pageContent">
        <div className="pageContent_Left">
          <div className="sideButtonSection">
            <button className="sideButton" id="githubSideButton">
              <img
                src="./src/svg/github.svg"
                alt="Github side icon"
                onClick={() =>
                  (window.location.href = "https://github.com/MrPingviin")
                }
              />
            </button>
            <button className="sideButton" id="mailSideButton">
              <img
                src="./src/svg/mail.svg"
                alt="Mail side icon"
                onClick={() =>
                  (window.location.href = "mailto:hello@penguinweb.eu")
                }
              />
            </button>
            <button className="sideButton" id="linkedinSideButton">
              <img
                src="./src/svg/linkedin_mini.svg"
                alt="LinkedIn side icon"
                onClick={() =>
                  (window.location.href =
                    "https://www.linkedin.com/in/szabo-richard/")
                }
              />
            </button>
          </div>
          <hr className="sideLine" id="leftSideline" />
        </div>

        <div className="pageContent_Center">
          <div id="landingPageContent">
            <div id="welcomeMessage">
              <div id="welcomeMessageContent">
                <h2 id="welcomeLine_1">Hello, I am</h2>
                <h1 id="welcomeLine_2">Richard Szabo.</h1>
                <p id="welcomeLine_3">
                  I am a Frontend Developer. My job is my passion, I love to
                  create good looking, fast, and interactive websites.
                </p>

                <button
                  id="checkOutProjectButton"
                  onClick={() => (window.location.href = "#projectPage")}
                >
                  Check out my projects
                </button>
              </div>
            </div>

            <div id="welcomeImage">
              <img
                src="./src/img/welcomeImage.webp"
                alt="Programmer logo with a notebook."
              />
            </div>
          </div>
        </div>

        <div className="pageContent_Right">
          <span
            className="sideEmail"
            id="sideEmail"
            onClick={() =>
              (window.location.href = "mailto:hello@penguinweb.eu")
            }
          >
            hello@penguinweb.eu
          </span>

          <hr className="sideLine" id="right_sideline" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
