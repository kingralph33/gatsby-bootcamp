import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h1>About Me!</h1>
      <h3>
        I am currently a full-stack developer looking to improve my skillset. I
        am freshly out of bootcamp and ready to grow my career
      </h3>
      <h4>
        Feel free to <Link to="/contact">contact me</Link>
      </h4>
      <Footer />
    </div>
  )
}

export default AboutPage
