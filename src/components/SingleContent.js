import React from 'react';
import { img_300 } from '../config';



const SingleContent = ({ id, poster, title, date, media_type, vote_average,
}) => {

  return (
    <div className='media'>
        <img className='poster' alt="show/movie" src={` ${img_300}/${poster}`} />
        <b className='title'>{title}</b>
        <span className='subtitle'>{media_type === "tv" ? "Tv Series" : "Movie"}</span>
        <span className='subtitle'>{date}</span>
    </div>
  )
}

export default SingleContent