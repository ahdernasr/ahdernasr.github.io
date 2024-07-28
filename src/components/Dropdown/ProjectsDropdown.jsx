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
} from "../Icons/Icons";

const ProjectsDropdown = (props) => {
  return (
    <div className="dropdown">
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
          </>
        }
      />
      <DropDownItem
        title="UO Dining Hall"
        description="A tool that allows users to have the uOttawa Dining Hall menu mailed to them daily."
        languages={
          <>
            <Go />
            <TypeScript />
            <Nextjs />
            <React />
            <PostgreSQL />
          </>
        }
      />
      <DropDownItem
        title="Punch!"
        description="iOS + watchOS app that calculates and displays the speed of your punch."
        languages={
          <>
            <Swift />
            <Apple />
          </>
        }
      />
      <DropDownItem
        title="Personal Portfolio"
        description="This website!"
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
        languages={
          <>
            <Rust />
          </>
        }
      />
      <DropDownItem
        title="Service Novigrad"
        description="Mobile government service application for SEG2505."
        languages={
          <>
            <Kotlin />
            <Firebase />
            <Android />
          </>
        }
      />
      <DropDownItem
        title="Arabic Character Recognition"
        description="Recognising arabic characters using computer vision."
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
        languages={
          <>
            <JavaScript />
            <HTML5 />
            <CSS />
          </>
        }
      />
    </div>
  );
};

const DropDownItem = (props) => {
  return (
    <div className="dropdown-container">
      <div className="dropdown-item">
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

export default ProjectsDropdown;
