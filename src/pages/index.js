import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"
const IndexPage = () => {
  return (
    <div>
      <Header />
      <h1>Hello!</h1>
      <h2>
        I am Ralph, a full-stack developer that wants to learn everything.
      </h2>
      <p>
        Need a developer? <Link to="/contact">Contact Me!</Link>
      </p>
      <Footer />
    </div>
  )
}

export default IndexPage
