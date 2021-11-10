import React from 'react'
import styled from 'styled-components'
import {
      BrowserRouter as Router,
      Switch,
      Route,
      Link
} from "react-router-dom";
import logoSrc from '../img/logo.png';
import { useState } from 'react'




const Header = () => {
      const [hamContent, setHamContent] = useState('☰')

      function onClickHam() {
            if (hamContent === "☰") {
                  setHamContent('╳')
            } else {
                  setHamContent('☰')
            }

      }

      return (
            <HeaderContainer>
                  <HamMenu onClick={onClickHam}>{hamContent}</HamMenu>
                  <Navbar hamShow={hamContent}>
                        <LiNav topli={true}><StyledLink to="/Home">Home</StyledLink></LiNav>
                        <span>|</span>
                        <LiNav ><StyledLink to="/Aboutme">About me</StyledLink></LiNav>
                        <span>|</span>
                        <LiNav  ><StyledLink to="/Collection">Collection</StyledLink></LiNav>
                        <span>|</span>
                        <LiNav ><StyledLink to="/Contactme">Contact me</StyledLink></LiNav>
                  </Navbar>
                  <Link to="/"><img src={logoSrc}></img></Link>

            </HeaderContainer>
      )
}

export default Header

const HeaderContainer = styled.div`
      display: flex;
      padding: 55px 144px;
      @media (max-width: 899px) {
          padding: 55px 10%;
            
      }
      justify-content: space-between;
      img {
            width: 70px;
            height: 51px;
      }
      `

const Navbar = styled.ul`
      @media (max-width: 899px) {
            display: ${({ hamShow }) => hamShow === "╳" ? "block" : "none"};
            background: rgba(221, 241, 222, 0.87);
            width: 100vw;
            height: 100vh;
            /* padding: 0px; */
            padding-top: 140px;
            margin: 0px;
            position: absolute;
            top: 0;
            left: 0;
            li {
                  width: 100%;
                  padding: 10px 0px;
                  padding-left: 10%;
                  border: 0.5px solid lightgreen;

            }
            li a {
                  padding-bottom: 10px;
                  padding-top: 10px;
                  font-size: 22px;
                  font-weight: 400;
            }
            span {
                  display: none;
            }

      }
      @media (min-width: 900px) {
            list-style-type: none;
            display: flex;
            align-items: center;
            text-align: center;
            span {
                  font-size: 30px;
                  color: #828282;
            }
            li {
                  padding-right: 10px;
                  padding-left: 10px;
            }
      }
`


const StyledLink = styled(Link)`
      font-weight: 400;
      font-style: normal;
      font-size: 24px;
      text-decoration: none;
      color: #828282;
      :hover {
            color: black;
      }
`

const HamMenu = styled.a`
    color: black;
    font-weight: bold;
    cursor: pointer;
    display: none;
    font-size: 30px;
    @media (max-width: 900px) {
        display: block;
        z-index:3;
    }
`

const LiNav = styled.li`
      @media (max-width: 899px) {
            ${({ topli }) => topli ? "border-top: none;" : ""}
      
      }
`

// const Atag = styled.Link`
//       color: #828282;
// `