import React from "react"
import Layout from "../components/layout"
import About from "../components/About"
import Skills from "../components/Skills"
import Contact from "../components/Contact"
import SEO from "../components/seo"
import Projects from "../components/Projects"
import "../../sass/index.css"

// Initial state

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="sections">
        <div style={{ minHeight: "100vh" }}>
          <div id="about" style={{ height: "110px" }}></div>
          <section>
            <About />
          </section>
        </div>
        <div style={{ minHeight: "100vh" }}>
          <div id="skills" style={{ height: "110px" }}></div>
          <section>
            <Skills />
          </section>
        </div>

        <div style={{ minHeight: "100vh" }}>
          <div id="contact" style={{ height: "110px" }}></div>
          <section>
            <Contact />
          </section>
        </div>

        <div style={{ minHeight: "100vh" }}>
          <div id="projects" style={{ height: "110px" }}></div>
          <section>
            <Projects />
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
