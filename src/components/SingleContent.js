import React from 'react';
import { img_300 } from '../config';
import { Badge } from '@mui/material';



const SingleContent = ({ id, poster, title, date, media_type, vote_average,
}) => {

  return (
    <div className='media'>
        <Badge badgeContent={vote_average} color={vote_average > 7 ? 'primary' : 'error'} />
        <img className='poster' alt="show/movie" src={` ${img_300}/${poster}`} />
        <b className='title'>{title}</b>
        <span className='subtitle'>{media_type === "tv" ? "Tv Series" : "Movie"}</span>
        <span className='subtitle'>{date}</span>
    </div>
  )
}

export default SingleContent