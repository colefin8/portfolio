import React from "react"
import "../../sass/Projects.css"

const Projects = () => {
  return (
    <>
      <h1
        style={{
          fontFamily: "Raleway, sans-serif",
          color: "#3b4043",
          fontVariant: "small-caps",
        }}
        className="section-header"
      >
        PROJECTS
      </h1>
      <p style={{ fontFamily: "Raleway, sans-serif" }} className="content">
        {`Listo: a budgeting and list making app that is focused on shareable lists and a user friendly (read: user-proof) design`}
      </p>
      <div className="screenshot-flex">
        <div className="screenshot" id="listo-screenshot-1">
          Landing Page
        </div>
        <div className="screenshot" id="listo-screenshot-2">
          Loading Screen
        </div>
        <div className="screenshot" id="listo-screenshot-3">
          User Dashboard
        </div>
      </div>
      <p style={{ fontFamily: "Raleway, sans-serif" }} className="content">
        I am a full stack web developer from Provo, Utah. Recently leaving a
        management position at a high-end woodworking business and looking for
        new challenges (or some other bullshit idk)
      </p>
      <div>PROJECT 2</div>
    </>
  )
}

export default Projects
