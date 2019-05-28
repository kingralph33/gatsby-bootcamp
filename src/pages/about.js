import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Me!</h1>
      <h3>
        I am currently a full-stack developer looking to improve my skillset. I
        am freshly out of bootcamp and ready to grow my career
      </h3>
      <h4>
        Feel free to <Link to="/contact">contact me</Link>
      </h4>
    </Layout>
  )
}

export default AboutPage
