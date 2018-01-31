import React from 'react'
import Link from 'gatsby-link'


const Header = () => (
  <div
    style={{
      marginBottom: '3rem',
      borderBottom: '2px solid #e6e6e6',
      fontFamily: 'Vollkorn, serif',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 980,
        padding: '1.45rem 1.0875rem',
        fontFamily: 'Vollkorn, serif',
      }}
   >
     <h1 style={{margin: 0, textAlign: 'center',fontSize: '24px'}}>
        <Link to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
        Granular Development
        </Link>
      </h1>
    </div>
  </div>
);


export default Header
