
import './SkillsPage.css'

function SkillsPage() {
  return (
    <div id="skillsPage" className="page">
           <div className="pageContent">
    
        <div className="pageContent_Center">

       <div className="pageTitle">
        <span>01. - My Skills</span> <hr className="hrline"/>
        </div>
        
        <div id="skillSection">
            <div className="skillCard">
                <img src="./src/skills/javascript.webp" alt="Red javascript logo" />
                <span>Javascript</span>
                <span>ES6</span>
            </div>

            <div className="skillCard">
                <img src="./src/skills/typescript.svg" alt="Red typescript logo" id="tslogo" />
                <span>Typescript</span>
            </div>

            <div className="skillCard">
                <img src="./src/skills/react.webp" alt="Red react logo" />
                <span>React</span>
            </div>

            <div className="skillCard">
                <img src="./src/skills/nodejs.svg" alt="Red nodejs logo" />
                <span>NodeJS</span>
            </div>

            <div className="skillCard">
                <img src="./src/skills/expressjs.png" alt="Red expressjs logo" />
                <span>ExpressJS</span>
    
            </div>

            <div className="skillCard">
                <img src="./src/skills/html5.webp" alt="Red html5 logo" />
                <span>HTML5</span>
            </div>

            <div className="skillCard">
                <img src="./src/skills/css3.webp" alt="Red css3 logo" />
                <span>CSS3</span>
            </div>

            <div className="skillCard">
                <img src="./src/skills/sass.webp" alt="Red sass logo" />
                <span>SASS</span>
            </div>
        </div>


        </div>




        
      </div>
  </div>


  )
}

export default SkillsPage
