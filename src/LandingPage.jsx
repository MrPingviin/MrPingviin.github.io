import './LandingPage.css'



function LandingPage() {
  return (
  <div id="landingPage" className="page">
    <nav>
      <div id="navbar">
        <div id="navbar-content">
        <div id="logoSection">
         <a href="#landingPage">
          <span> Penguin Web</span>
         </a>
          </div>
          <div id="navSelectionSection">
          <ul id="navOptions">
          <li id="homeOption"><a href="#landingPage">00. Home</a></li>
          <li id="skillOption"><a href="#skillsPage">01. My Skills</a></li>
          <li id="projectsOption"><a href="#projectPage">02. Projects</a></li>
          <li id="aboutOption"><a href="#aboutPage">03. About</a></li>
          <li id="contactOption"><a href="#contactPage">04. Contact</a></li>
          
          </ul>
          <a href="https://www.linkedin.com/in/rich%C3%A1rd-szab%C3%B3/" target="blank"><button id="resumeButton">Resume</button></a>
          </div>
        </div>
      </div>

    </nav>

    <div className="pageContent">
        <div className="pageContent_Left">
          <div className="sideButtonSection">
          <button className="sideButton" id="githubSideButton">
          <a href="https://github.com/MrPingviin" target="_blank"><img src="./src/svg/github.svg" alt="Github side icon" /></a>
          </button>
          <button className="sideButton" id="mailSideButton">
          <a href="mailto:hello@penguinweb.eu"><img src="./src/svg/mail.svg" alt="Mail side icon" /></a>
          </button>
          <button className="sideButton" id="linkedinSideButton">
          <a href="https://www.linkedin.com/in/rich%C3%A1rd-szab%C3%B3/" target="blank"><img src="./src/svg/linkedin_mini.svg" alt="LinkedIn side icon" /></a>
          </button>
          </div>
          <hr className="sideLine" id="leftSideline"/>
          </div>



        <div className="pageContent_Center">

        <div id="landingPageContent">

        <div id="welcomeMessage">
        <div id="welcomeMessageContent">
        <h2 id="welcomeLine_1">Hello, I am</h2>
        <h1 id="welcomeLine_2">Richard Szabo.</h1>
        <p id="welcomeLine_3">I am a Frontend Developer. My job is my passion,
        I love to create good looking, fast, and interactive websites.</p>
       
          <a href="#projectPage"><button id="checkOutProjectButton">Check out my projects</button></a>
        </div>
        </div>

        <div id="welcomeImage">
        <img src="./src/img/welcomeImage.webp" alt="Programmer logo with a notebook." />
        </div>
        </div>


        </div>




        <div className="pageContent_Right">
     
          <span className="sideEmail" id="sideEmail">
           <a href="mailto:hello@penguinweb.eu">hello@penguinweb.eu</a>
          </span>
        
          <hr className="sideLine" id="right_sideline" />
          </div>
      </div>


    
  </div>
  )

  
}

export default LandingPage
