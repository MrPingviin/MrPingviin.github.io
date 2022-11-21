import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./LandingPage";
import SkillsPage from "./SkillsPage";
import ProjectsPage from "./ProjectsPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LandingPage />
    <SkillsPage />
    <ProjectsPage />
    <AboutPage />
    <ContactPage />
  </React.StrictMode>
);
