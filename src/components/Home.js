import React from 'react'
import Homeimg from '../img/png/large/25.png';
import styled from 'styled-components'

const Home = () => {
      return (
            <>
                  <Homecontainer>
                        <Imgdiv></Imgdiv>
                  </Homecontainer>
                  <H1div>
                        <h1>AVITOR DESIGN</h1>
                  </H1div>
            </>
      )
}

export default Home

const Homecontainer = styled.div`
      position : absolute;
      top: 0;
      left:0;
      width: 100%;
      height:100%;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      z-index:2;
      
      `
const Imgdiv = styled.div`
      width: 400px;
      height: 500px;
      max-width: 433px;
      max-height: 600px;
      background-repeat: no-repeat;
      background-size: cover;
      margin-top: 150px;
      background: url(${Homeimg});  
      border: 0.5px solid black;
      `
const H1div = styled.div`
      position : absolute;
      top: 0;
      left:0;
      width: 100%;
      height:100%;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      z-index:3;
      h1 { 
            color: #0E310F;
            /* font: 'Purple Purse'; */
            font-Weight :400;
            font-Style :normal;
            font-Size :95px;
            position: absolute;
            white-space: nowrap;
            margin-top: 270px;
            opacity: 0.5;
            @media (max-width: 899px) {
                  font-Size :65px;
            }      
      }
      
`