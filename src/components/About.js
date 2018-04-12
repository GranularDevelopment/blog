import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { Page, Row, Column } from 'hedron'

import ColorBar from '../components/ColorBar'

export default class About extends React.Component {
  render() {
    return (
      <Row alignItems="flex-end">
        <Column xs={12} sm={12} smShift={0} md={6} lg={5} lgShift={1}>
          <h2>About</h2>
              <ColorBar color="#a6fff7"/>
          <p>
            <strong>
              Hey! I'm Brian, a software engineer based out of Maryland.
            </strong>
          </p>
          <p>
          I studied Business Economics at the University of Liverpool, Economics and 
          Business Administration at Universitat Autònoma de Barcelona and Applied and 
          Computational Mathematics at Johns Hopkins University. I have a passion for 
          software development and a mission to be one of the best developers in the world!
          </p>
        </Column>

        <Column xs={12} sm={12} smShift={0} md={6} lg={5}>
          <h2>Passions</h2>
          <ColorBar color="#FFA6A6"/>
          <p>
             When I'm not studying or coding, I enjoy hiking with my trusty Shiba Inus, reading Haruki Murakami novels and practicing Castellano. 
          </p>
        </Column>
      </Row>
    )
  }
}
