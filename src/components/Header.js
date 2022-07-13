import React from 'react'
import blockbuster from "../images/blockbuster-logo.png"

function Header() {
  return (
        <>
          <span onClick={() => window.scroll(0,0)} className='header'>
              <p className='header-name'>BLOCKBUSTER</p>
              <a href="https://bendblockbuster.com/" alt="original-store">
              <img className="sign" src={blockbuster} alt="sign"/>
              </a>
          </span>
          
        </>
  )
}

export default Header