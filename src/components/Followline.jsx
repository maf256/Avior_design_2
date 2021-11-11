import React from 'react'
import styled from 'styled-components'

const Followline = () => {
      return (
            <div>
                  <Lineside position={true}></Lineside>
                  <Lineside ></Lineside>
                  <H1 position={true}>Follow your dreams</H1>
                  <H1>Follow your dreams</H1>

            </div>
      )
}

export default Followline

const Lineside = styled.div`
      width: 1px;
      height: 33vh;
      border-right: 1px solid #828282;
      position: absolute;
      ${({ position }) => position ? "left: 104px; bottom: 0;" : "right:104px; top: 0;"}
      @media (max-width: 899px) {
            ${({ position }) => position ? "left: 5%; bottom: 0;" : "right: 5%; top: 0;"}
      }

`

const H1 = styled.h1`
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 21px;
      width: 0;
      color : #828282;
      white-space: nowrap;
      position: absolute;
      transform-origin: bottom;       
      ${({ position }) => position ? "left: 112px; bottom: 33vh; transform: rotate(270deg);" : "right:112px; top: 31vh; transform: rotate(90deg);"}
      @media (max-width: 899px) {
            ${({ position }) => position ? "left: 6.5%; bottom: 33vh; transform: rotate(270deg);" : "right:6.5%; top: 30vh; transform: rotate(90deg);"}
      }

`