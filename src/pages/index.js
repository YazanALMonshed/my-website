import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <header>
        <div className="text-home">
          this is here now you can take me from er
        </div>
        <div className="image-home">

        </div>
      </header>

    <Link to="/page-2/">Go to scound pages now</Link>
  </Layout>
)

export default IndexPage
