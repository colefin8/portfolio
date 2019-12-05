import { Link } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
import PropTypes from "prop-types"
import React from "react"

const Header = props => {
  const { siteTitle } = props
  return (
    <header
      style={{
        padding: "0 5vw",
        background: `#3b4043`,
        marginBottom: `1.45rem`,
        display: "flex",
        position: "fixed",
        zIndex: "2",
        top: "0",
        width: "100vw",
        justifyContent: "space-between",
        alignItems: "center",
        color: `#b2b2b2`,
        height: "120px",
        fontFamily: "Raleway, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 960,
          padding: `1.45rem 0`,
        }}
      >
        <h1
          style={{
            margin: 0,
            color: `#b2b2b2`,
            textDecoration: `none`,
            fontFamily: "Raleway, sans-serif",
          }}
        >
          {siteTitle}
        </h1>
      </div>
      <h2
        className="header-h2"
        style={{ margin: 0, fontFamily: "Raleway, sans-serif" }}
        onClick={() => {
          scrollTo("#about")
        }}
      >
        About
      </h2>
      <h2
        className="header-h2"
        style={{ margin: 0, fontFamily: "Raleway, sans-serif" }}
        onClick={() => scrollTo("#skills")}
      >
        Skills
      </h2>
      <h2
        className="header-h2"
        style={{ margin: 0, fontFamily: "Raleway, sans-serif" }}
        onClick={() => scrollTo("#contact")}
      >
        Contact
      </h2>
      <h2
        className="header-h2"
        style={{ margin: 0, fontFamily: "Raleway, sans-serif" }}
        onClick={() => scrollTo("#projects")}
      >
        Projects
      </h2>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
