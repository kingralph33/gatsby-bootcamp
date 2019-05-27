import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

const ContactPage = () => {
  return (
    <div>
      <Header />
      <h1>Contact</h1>
      <p>
        I am available to be reach via{" "}
        <a
          href="https://www.linkedin.com/in/ralphkingjr"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
      <Footer />
    </div>
  )
}

export default ContactPage
