import MainSelection from "../../components/MainSelection/MainSelection";
import Links from "../../components/Links/Links";
import ExperienceDropdwon from "../../components/Dropdown/ExperienceDropdown";
import ProjectsDropdown from "../../components/Dropdown/ProjectsDropdown";
import "./style.css";
import { useState } from "preact/hooks";

export function Home() {
  const [showExperience, setShowExperience] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  console.log(showExperience, showProjects);

  return (
    <div class="home">
      <MainSelection label="Ahmed Nasr" hover="CS @ uOttawa 🏛️" />
      <MainSelection
        label="Experience"
        hover={
          showExperience ? ExperienceHoverOffLabel : ExperienceHoverOnLabel
        }
        onClick={() => {
          setShowProjects(false);
          setShowExperience(!showExperience);
        }}
      />
      {showExperience && <ExperienceDropdwon />}
      <MainSelection
        label="Projects"
        hover={showProjects ? ProjectsHoverOffLabel : ProjectsHoverOnLabel}
        onClick={() => {
          setShowExperience(false);
          setShowProjects(!showProjects);
        }}
      />
      {showProjects && <ProjectsDropdown />}
      <MainSelection label="Contact" hover="adera073@uottawa.ca 👋" />
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
