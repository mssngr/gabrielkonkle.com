import React from 'react'
// import Link from 'gatsby-link'
import styled from 'styled-components'

import profile from '../../static/images/outdoors-profile.jpg'
import Button from '../components/Button'
import {media} from '../utils/media'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100vw;
`

const Hero = styled.div`
  flex: 1;
  padding: 3rem 2rem;
  min-width: 320px;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  color: ${props => props.theme.dark};
  box-sizing: border-box;

  p {
    font-size: 1.68rem;
    margin-top: -1rem;
    @media ${media.phone} {
      font-size: 1.25rem;
    }
    @media ${media.tablet} {
      font-size: 1.45rem;
    }
  }
`

const GabrielImg = styled.div`
  flex: 1;
  min-width: 50vw;
  height: 100vh;
  background: no-repeat center left / cover url(${props => props.src});

  @media (max-aspect-ratio: 1/1) {
    min-width: 100vw;
    height: 40vh;
  }
`

class Index extends React.Component {
  render() {
    return (
      <Container>
        <GabrielImg src={profile} />
        <Hero>
          <h1>Hi.</h1>
          <p>
            I&apos;m Gabriel Konkle, a Front End Developer based in Denver,
            Colorado, specializing in React, React Native, GraphQL, and other
            technologies to create engaging experiences on the web.
          </p>
          <a href="mailto:gabriel@gabrielkonkle.com">
            <Button big>
              <svg
                width="1792"
                height="1792"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z" />
              </svg>
              Contact
            </Button>
          </a>
        </Hero>
      </Container>
    )
  }
}

export default Index
