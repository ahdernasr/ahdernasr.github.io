import "./Dropdown.css";
import {
  Go,
  TypeScript,
  React,
  Nextjs,
  PostgreSQL,
  Rust,
  Swift,
  HTML5,
  JavaScript,
  CSS,
  Preact,
  Python,
  Apple,
  Figma,
  Vite,
  TensorFlow,
  Kotlin,
  Firebase,
  Android,
  MySQL,
  Django,
  Docker,
  JWT,
  Matplotlob,
  GraphQL,
  Express,
  Linux,
  DigitalOcean,
  AWS,
  CircleCI,
  OAuth,
  Trpc,
  Prisma,
  Nodejs,
  TailwindCSS,
  C,
} from "../Icons/Icons";
import { useState } from "preact/hooks";

const ExperienceDropdown = (props) => {
  const [page, setPage] = useState(1);

  return (
    <div className="dropdown">
      {page == 1 ? (
        <>
          <DropDownItem
          key="(1,1)"
            title="Develop For Good (S24)"
            description="Student Engineering Manager - Human Rights First's Litigation Tracker"
            style={{ animationDuration: "0.35s", animationDelay: "0.05s" }}
            languages={
              <>
                <TypeScript />
                <Nextjs />
                <Trpc />
                <Prisma />
                <OAuth />
                <MySQL />
                <Figma />
              </>
            }
          />
          <DropDownItem
          key="(1,2)"
            title="Hack the Hill"
            description="Full Stack Developer - Track the Hack "
            style={{ animationDuration: "0.35s", animationDelay: "0.1s" }}
            languages={
              <>
                <TypeScript />
                <React />
                <TailwindCSS />
                <Nodejs />
                <Express />
                <PostgreSQL />
              </>
            }
          />
          <DropDownItem
          key="(1,3)"
            title="UORocketry"
            description="Avionics Software Subteam - Hydra"
            style={{ animationDuration: "0.35s", animationDelay: "0.15s" }}
            languages={
              <>
                <C />
                <Rust />
                <Linux />
              </>
            }
          />
        </>
      ) : (
        <></>
      )}
      <div className="button-container">
        <div />
        <div className="button-subcontainer">
          <div>{page}/1</div>
          <div />
          <div onClick={() => setPage(page < 1 ? page + 1 : 1)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div />
        </div>
        <div />
      </div>
    </div>
  );
};

const DropDownItem = (props) => {
  return (
    <div className="dropdown-container">
      <div />
      <div className="dropdown-item fadeInAnimation" style={props.style}>
        <div className="top">
          <p>{props.title}</p>
          <span>{props.languages}</span>
        </div>
        <div className="bottom">{props.description}</div>
      </div>
      <div />
    </div>
  );
};

export default ExperienceDropdown;
