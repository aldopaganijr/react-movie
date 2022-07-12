import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';



function Footer() {
  return (
    <div className='footer'>
        <div className='copyright'>
         <p>© 2019 Blockbuster. All Rights Reserved.</p>
         </div>
        <a className='instagram' href="https://www.instagram.com/blockbusterbend/?hl=en">
          <InstagramIcon/>
        </a>
        <a className='facebook' href="https://www.facebook.com/lastblockbusterofficial">
          <FacebookIcon/>
        </a>
        <a className='twitter' href="https://twitter.com/blockbusterbend?lang=en"> 
          <TwitterIcon/>
        </a>
    </div>
  )
}

export default Footer;