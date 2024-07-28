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
            title="Rehla"
            description="A middle-east oriented Airbnb clone."
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
            title="UO Dining Hall"
            description="A tool that allows users to have the uOttawa Dining Hall menu mailed to them daily."
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
            title="Punch!"
            description="iOS + watchOS app that calculates and displays the speed of your punch."
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
            title="Personal Portfolio"
            description="This website!"
            link="https://www.github.com/ahdernasr/portfolio"
            languages={
              <>
                <Preact />
                <Vite />
              </>
            }
          />
          <DropDownItem
            title="ChainShare"
            description="A blockchain network based decentralised file sharing CLI."
            link="https://www.github.com/ahdernasr/chain-share"
            languages={
              <>
                <Rust />
                <Linux />
              </>
            }
          />
          <DropDownItem
            title="Pokedex"
            description="Pokedex clone made for a take home assessment. "
            link="https://www.github.com/ahdernasr/pokedex"
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
            title="Novigrad"
            description="Mobile government service application for SEG2505."
            link="https://github.com/jwt2706/Novigrad"
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
            title="Arabic Character Recognition"
            description="Recognising arabic characters using computer vision."
            link="https://www.github.com/ahdernasr/arabic-char-recognition"
            languages={
              <>
                <Python />
                <TensorFlow />
              </>
            }
          />
          <DropDownItem
            title="Chess"
            description="Simple chess board made with vanilla JavaScript."
            link="https://www.github.com/ahdernasr/chess"
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
        <div className="button-subcontainer">
          <div>{page}/3</div>
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
        </div>
        <div />
      </div>
    </div>
  );
};

const DropDownItem = (props) => {
  return (
    <div className="dropdown-container">
      <div className="dropdown-item">
        <div className="top">
          <a href={props.link ? props.link : "https://www.github.com/ahdernasr"}>{props.title}</a>
          <span>{props.languages}</span>
        </div>
        <div className="bottom">{props.description}</div>
      </div>
      <div />
    </div>
  );
};

export default ProjectsDropdown;
