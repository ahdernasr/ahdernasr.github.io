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
} from "../Icons/Icons";
import { useState } from "preact/hooks";

const ProjectsDropdown = (props) => {
  const [page, setPage] = useState(1);

  return (
    <div className="dropdown">
      {page == 1 ? (
        <>
          <DropDownItem
            key="(1,1)"
            title="Rehla"
            description="A middle-east oriented Airbnb clone."
            style={{ animationDuration: "0.35s", animationDelay: "0.05s" }}
            languages={
              <>
                <TypeScript />
                <Nextjs />
                <React />
                <Python />
                <Django />
                <Docker />
                <JWT />
                <MySQL />
                <Figma />
                <AWS />
              </>
            }
          />
          <DropDownItem
            key="(1,2)"
            title="UO Dining Hall"
            description="A tool that allows users to have the uOttawa Dining Hall menu mailed to them daily."
            style={{ animationDuration: "0.35s", animationDelay: "0.1s" }}
            link="https://www.github.com/ahdernasr/dailydininghall"
            languages={
              <>
                <Go />
                <TypeScript />
                <Nextjs />
                <React />
                <PostgreSQL />
                <DigitalOcean />
              </>
            }
          />
          <DropDownItem
            key="(1,3)"
            title="Punch!"
            description="iOS + watchOS app that calculates and displays the speed of your punch."
            className="fadeInAnimation"
            style={{ animationDuration: "0.35s", animationDelay: "0.15s" }}
            link="https://www.github.com/ahdernasr/punch"
            languages={
              <>
                <Swift />
                <Matplotlob />
                <Apple />
              </>
            }
          />
        </>
      ) : page == 2 ? (
        <>
          <DropDownItem
            key="(2,1)"
            title="Personal Portfolio"
            description="This website!"
            link="https://www.github.com/ahdernasr/portfolio"
            style={{ animationDuration: "0.35s", animationDelay: "0.05s" }}
            languages={
              <>
                <Preact />
                <Vite />
              </>
            }
          />
          <DropDownItem
            key="(2,2)"
            title="ChainShare"
            description="A blockchain network based decentralised file sharing CLI."
            link="https://www.github.com/ahdernasr/chain-share"
            style={{ animationDuration: "0.35s", animationDelay: "0.1s" }}
            languages={
              <>
                <Rust />
                <Linux />
              </>
            }
          />
          <DropDownItem
            key="(2,3)"
            title="Pokedex"
            description="Pokedex clone made for a take home assessment. "
            link="https://www.github.com/ahdernasr/pokedex"
            style={{ animationDuration: "0.35s", animationDelay: "0.15s" }}
            languages={
              <>
                <JavaScript />
                <GraphQL />
                <Express />
              </>
            }
          />
        </>
      ) : (
        <>
          <DropDownItem
            key="(3,1)"
            title="Novigrad"
            description="Mobile government service application for SEG2505."
            link="https://github.com/jwt2706/Novigrad"
            style={{ animationDuration: "0.35s", animationDelay: "0.05s" }}
            languages={
              <>
                <Kotlin />
                <Firebase />
                <Android />
                <CircleCI />
              </>
            }
          />
          <DropDownItem
            key="(3,2)"
            title="Arabic Character Recognition"
            description="Recognising arabic characters using computer vision."
            link="https://www.github.com/ahdernasr/arabic-char-recognition"
            style={{ animationDuration: "0.35s", animationDelay: "0.1s" }}
            languages={
              <>
                <Python />
                <TensorFlow />
              </>
            }
          />
          <DropDownItem
            key="(3,3)"
            title="Chess"
            description="Simple chess board made with vanilla JavaScript."
            link="https://www.github.com/ahdernasr/chess"
            style={{ animationDuration: "0.35s", animationDelay: "0.15s" }}
            languages={
              <>
                <JavaScript />
                <HTML5 />
                <CSS />
              </>
            }
          />
        </>
      )}
      <div className="button-container">
        <div />
        <div className="button-subcontainer">
          <div>{page}/3</div>
          <div />
          <div onClick={() => setPage(page < 3 ? page + 1 : 1)}>
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
          <a
            href={props.link ? props.link : "https://www.github.com/ahdernasr"}
          >
            {props.title}
          </a>
          <span>{props.languages}</span>
        </div>
        <div className="bottom">{props.description}</div>
      </div>
      <div />
    </div>
  );
};

export default ProjectsDropdown;
