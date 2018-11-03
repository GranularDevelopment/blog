import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Media from 'react-media'

import { rhythm, scale } from '../utils/typography'
require("prismjs/themes/prism-solarizedlight.css");

class Template extends React.Component {
  render() {
    const { location, children } = this.props

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Container>
        <Hero/>
        <Container
        style={{
          maxWidth: rhythm(34),
          padding: `${rhythm(2.9)} ${rhythm(3/5)}`,

        }}
      >
          {children()}
        </Container>
      </Container>
      
    )
  }
}

export default Template
