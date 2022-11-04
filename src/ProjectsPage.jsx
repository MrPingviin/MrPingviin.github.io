
import './ProjectsPage.css'

function ProjectsPage() {

  return (
    <div id="projectPage" className="page">
    <div className="pageContent">

 <div className="pageContent_Center">

<div className="pageTitle">
 <span>02. - My Projects</span> <hr className="hrline"/>
 </div>

    <div id="projectSection">

      <div className="projectRow">
        <img src="./src/img/placeholder.webp" alt="Placeholder" />
        <div className="projectDescription">
          <h1>Pizzeria / Restaurant App</h1>
          <h2>HTML5, CSS3, React, ExpressJS</h2>
          <p>A fully functional webapp for a pizzeria. On the client side you can place orders and you can see manage them on the admin page.</p>
        </div>
      </div>


      <div className="projectRow">
      <div className="projectDescription">
          <h1>ToDo App</h1>
          <h2>HTML5, CSS3, React, ExpressJS</h2>
          <p>Are you a busy man? Then this app is made for you! You can write down and track your todos. Also you are able to organize them based on urgency.</p>
        </div>
        <img src="./src/img/placeholder.webp" alt="Placeholder" />
        
      </div>

      <button id="projectsSeeMoreButton" onClick={() => alert("Coming Soon")}>See More</button>



    </div>



 </div>




 
</div>
</div>
  )
}

export default ProjectsPage
