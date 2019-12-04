import React from "react"
import "../../sass/Skills.css"

const Skills = () => (
  <>
    <h1
      style={{ fontFamily: "Raleway, sans-serif", fontVariant: "small-caps" }}
      className="section-header"
    >
      SKILLS
    </h1>
    <div
      style={{ fontFamily: "Raleway, sans-serif" }}
      className="grid-content content"
    >
      <div className="icon-title">
        <div id="css3" className="icon-div"></div>
        <p>CSS3</p>
      </div>
      <div className="icon-title">
        <div id="git" className="icon-div"></div>
        <p>Git</p>
      </div>
      <div className="icon-title">
        <div id="github" className="icon-div"></div>
        <p>GitHub</p>
      </div>
      <div className="icon-title">
        <div id="javascript" className="icon-div"></div>
        <p>Javascript</p>
      </div>
      <div className="icon-title">
        <div id="nodejs" className="icon-div"></div>
        <p>Nodejs</p>
      </div>
      <div className="icon-title">
        <div id="npm" className="icon-div"></div>
        <p>npm</p>
      </div>
      <div className="icon-title">
        <div id="postgres" className="icon-div"></div>
        <p>PostgreSQL</p>
      </div>
      <div className="icon-title">
        <div id="react" className="icon-div"></div>
        <p>React</p>
      </div>
      <div className="icon-title">
        <div id="sass" className="icon-div"></div>
        <p>Sass</p>
      </div>
      <div className="icon-title">
        <div id="slack" className="icon-div"></div>
        <p>Slack</p>
      </div>
    </div>
  </>
)

export default Skills
