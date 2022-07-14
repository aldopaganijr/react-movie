import React from 'react';
import { img_300, unavailable } from '../config';
import { Badge } from '@mui/material';
import { motion } from "framer-motion"
import {pageAnimation} from "../animation";



const SingleContent = ({ id, poster, title, date, media_type, vote_average,
}) => {

  return (
    <motion.div whileHover={{scale: 1.1}} exit="exit" variants={pageAnimation} initial="hidden" animate="show" className='media'>
        <Badge badgeContent={vote_average} color={vote_average > 7 ? 'primary' : 'error'} />
        <img className='poster' alt="show/movie" src={poster ? `${img_300}${poster}` : unavailable} />
        <b className='title'>{title}</b>
        <span className='subtitle'>{media_type === "tv" ? "Tv Series" : "Movie"}</span>
        <span className='subtitle'>{date}</span>
    </motion.div>
  )
}

export default SingleContent