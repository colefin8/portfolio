import React from "react"
import "../../sass/Contact.css"

const Contact = () => (
  <>
    <h1
      style={{
        fontFamily: "Raleway, sans-serif",
        color: "#3b4043",
        fontVariant: "small-caps",
      }}
      className="section-header"
    >
      CONTACT
    </h1>
    <div className="contact-content-div">
      <a
        className="contact-content"
        style={{
          fontFamily: "Raleway, sans-serif",
        }}
        href="https://github.com/colefin8"
      >
        GitHub
      </a>

      <a
        className="contact-content"
        style={{
          fontFamily: "Raleway, sans-serif",
        }}
        href="www.linkedin.com/in/cole-m-finlayson"
      >
        LinkedIn
      </a>

      <p
        className="contact-content"
        style={{
          fontFamily: "Raleway, sans-serif",
        }}
      >
        {`Email: cole.fin8@gmail.com`}
      </p>
    </div>
  </>
)

export default Contact
