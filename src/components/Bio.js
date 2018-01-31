import React from 'react'

import 'typeface-Vollkorn'

import profilePic from '../img/profile.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Brian Smith`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
        Written by <strong>Brian Smith</strong> who lives and works in  
        Maryland.{' '}
        </p>
      </div>
    )
  }
}

export default Bio
