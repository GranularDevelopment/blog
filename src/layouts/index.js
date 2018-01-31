import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Media from 'react-media'

import { rhythm, scale } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children } = this.props

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Container
        style={{
          maxWidth: rhythm(34),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
      <Hero/>
   {children()}

      </Container>
    )
  }
}

export default Template
