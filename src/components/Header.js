import React from 'react'
import blockbuster from "../images/blockbuster-logo.png"
import { motion } from "framer-motion"

function Header() {
  return (
     
    <span onClick={() => window.scroll(0,0)} className='header'>
        <p className='header-name'>BLOCKBUSTER</p>
        <motion.a whileHover={{scale: 1.5}} href="https://bendblockbuster.com/" alt="original-store">
        <img className="sign" src={blockbuster} alt="sign"/>
        </motion.a>
    </span>
  )
}

export default Header