import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react';
import CustomPagination from '../../components/CustomPagination';
import SingleContent from '../../components/SingleContent';
import { motion } from "framer-motion";




const Movies = () => {

  const [page, setPage ] = useState(1);
  const [content, setContent] = useState([]);

  const fetchMovies = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`)
    console.log(data)
    setContent(data.results)


  }

  useEffect(() => {
    fetchMovies();
      // eslint-disable-next-line
  }, [page])
  

  return (
    <div>
      <motion.div className='pageTitle' exit="exit" initial="hidden" animate="show">Movies
      </motion.div>
        <div className='trending'>
            {content && content.map((c) => 
            <SingleContent 
            key={c.id} 
            id={c.id} 
            poster={c.poster_path}
            title={c.title || c.name} 
            date={c.first_air_date || c.release_date}
            media_type={c.media_type}
            vote_average={c.vote_average}
            />
            )}
        </div>
        <CustomPagination variant="outlined" setPage={setPage} />
      </div>
  )
}

export default Movies