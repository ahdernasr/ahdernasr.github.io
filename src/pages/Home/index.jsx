import MainSelection from "../../components/MainSelection/MainSelection";
import Links from "../../components/Links/Links";
import ExperienceDropdwon from "../../components/Dropdown/ExperienceDropdown";
import ProjectsDropdown from "../../components/Dropdown/ProjectsDropdown";
import "./style.css";
import { useState } from "preact/hooks";

export function Home() {
  const [showExperience, setShowExperience] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <div class="home">
      <MainSelection
        label={showName ? "CS @ uOttawa 🏛️" : "Ahmed Nasr"}
        className={showName ? "black" : "white"}
        hover="CS @ uOttawa 🏛️"
        onClick={() => {
          setShowExperience(false);
          setShowContact(false);
          setShowProjects(false);
          setShowName(!showName);
        }}
      />
      <MainSelection
        label="Experience"
        hover={
          showExperience ? ExperienceHoverOffLabel : ExperienceHoverOnLabel
        }
        className={showExperience ? "black" : "white"}
        onClick={() => {
          setShowProjects(false);
          setShowName(false);
          setShowContact(false);
          setShowExperience(!showExperience);
        }}
      />
      {showExperience && <ExperienceDropdwon />}
      <MainSelection
        label="Projects"
        hover={showProjects ? ProjectsHoverOffLabel : ProjectsHoverOnLabel}
        className={showProjects ? "black" : "white"}
        onClick={() => {
          setShowExperience(false);
          setShowName(false);
          setShowContact(false);
          setShowProjects(!showProjects);
        }}
      />
      {showProjects && <ProjectsDropdown />}
      <MainSelection
        label={showContact ? "adera073@uottawa.ca 👋" : "Contact"}
        className={showContact ? "black" : "white"}
        hover="adera073@uottawa.ca 👋"
        onClick={() => {
          setShowExperience(false);
          setShowName(false);
          setShowProjects(false);
          setShowContact(!showContact);
        }}
      />
      <Links />
    </div>
  );
}

const ExperienceHoverOnLabel = (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
    Experience
  </>
);

const ProjectsHoverOnLabel = (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
    Projects
  </>
);

const ExperienceHoverOffLabel = (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
    Experience
  </>
);

const ProjectsHoverOffLabel = (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
    Projects
  </>
);
