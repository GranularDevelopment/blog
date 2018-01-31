import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import GitImage from '../img/Octocat.png'
import LinkedInImage from '../img/linkedin.png'
import GmailImage from '../img/Gmail.png'

const HeroSection = styled.div`height: 10vh;`

const FrontPageHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
  }
`

const LogoWrapper = styled.div`
  color: #333;
  margin: 24px 0 0 0px;
  @media (min-width: 768px) {
    margin: 24px 0 0 24px;
  }
`

const Name = styled.h1`
  font-family: 'bebasneue', Helvetica, sans-serif;
  font-size: 60px;
  line-height: 60px;
  text-align: center;
  margin: 0;
  @media (min-width: 500px) {
    font-size: 70px;
  }
  @media (min-width: 768px) {
    font-size: 80px;
    text-align: left;
  }
`

const Role = styled.div`
  font-size: 1.2em;
  line-height: 1em;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`

const SocialIconWrapper = styled.div`
  display: flex;
  padding: 16px;
  justify-content: center;
  @media (min-width: 768px) {
    padding: 24px;
  }
`

const SocialIcon = styled.svg`
  margin: 0 4px 0 4px;
  @media (min-width: 768px) {
    margin-left: 8px;
  }
  fill: #333;
  :hover {
    fill: green;
  }
`

const SocialLink = styled.a``

const SpirographWrapper = styled.div``

const ArrowWrapper = styled.div`
  display: none;
  position: absolute;
  bottom: 32px;
  @media (min-width: 500px) {
    display: block;
  }
  @media (min-width: 768px) {
    bottom: 32px;
  }
  width: 100%;
`

const ArrowCenter = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 100px;
  height: 100px;
`

const ArrowLink = styled.a`display: block;`

const Arrow = styled.svg`
  visibility: hidden;
  fill: #dcdcdc;
  :hover {
    fill: #555;
  }
  @media (min-width: 500px) {
    visibility: visible;
  }
`
const GitImageWrapper = styled.div`
  border: none;
  border-bottom: 1px solid #e0e0e0;
  background-image: url(${GitImage});
  background-size: cover;
  background-position: 20% 22%;
  height: 40px;
  width:40px
`
const LinkedInImageWrapper = styled.div`
  border: none;
  border-bottom: 1px solid #e0e0e0;
  background-image: url(${LinkedInImage});
  background-size: cover;
  background-position: 20% 22%;
  height: 40px;
  width:40px
`
const GmailImageWrapper = styled.div`
  border: none;
  border-bottom: 1px solid #e0e0e0;
  background-image: url(${GmailImage});
  background-size: cover;
  background-position: 20% 22%;
  height: 40px;
  width:40px
`


export default class Hero extends React.Component {
  render() {
    return (
      <HeroSection>
        <FrontPageHeader>
          <LogoWrapper>
          <Name>
          <Link to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
        Brian Smith
        </Link>
        </Name>
            <Role>Software Engineer</Role>
          </LogoWrapper>
          <SocialIconWrapper>
            <SocialLink href="https://github.com/brian-smith723">
            <GitImageWrapper/>
            </SocialLink>
            <SocialLink href="https://linkedin.com/in/brian-smith-811097a0">
            <LinkedInImageWrapper/>
            </SocialLink>
            <SocialLink href="mailto:briansmith4479@gmail.com">
             <GmailImageWrapper/>
            </SocialLink>
          </SocialIconWrapper>
        </FrontPageHeader>
       </HeroSection>
    )
  }
}

