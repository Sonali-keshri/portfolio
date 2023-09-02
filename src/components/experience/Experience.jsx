import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>Skills | Cerification</h2>
      <div className="container experience_container">
        <div className="experience_frontend ">
          <h3 className="text-light">Frontend Development Skills</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icons" />
              <div className="skill">
                <h4>HTML | HTML5</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icons" />
              <div className="skill">
                <h4>CSS | CSS3</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icons" />
              <div className="skill">
                <h4>Javascript</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icons" />
              <div className="skill">
                <h4>Talwind CSS</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icons" />
              <div className="skill">
                <h4>React.Js</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icons" />
              <div className="skill">
                <h4>Redux-Toolkit</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icons" />
              <div className="skill">
                <h4>Git</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icons" />
              <div className="skill">
                <h4>Material UI</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icons" />
              <div className="skill">
                <h4>Responsive Design</h4>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icons" />
              <div className="skill">
                <h4>ES6</h4>
              </div>
            </article>
          </div>
        </div>

        {/* === END OF FRONT END */}

        <div className="certification">
          <h3 className="text-light">Cerificates</h3>
          <div className="certficate_content">
            <article className="certificate">
              <BsFillPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>Introduction to Frontend development</h4>
                <small className="text-light">Nov 2022 <br/>certified-Meta</small>
              </div>
            </article>
            <article className="certificate">
              <BsFillPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>Programming With JavaScript</h4>
                <small className="text-light">Dec 2022 <br/>certified-Meta</small>
              </div>
            </article>
            <article className="certificate">
              <BsFillPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>Advanced React </h4>
                <small className="text-light">Jan 2023 <br/>certified-Meta</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
