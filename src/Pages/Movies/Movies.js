import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react';
import CustomPagination from '../../components/CustomPagination';
import SingleContent from '../../components/SingleContent';
import { motion } from "framer-motion";
import { slider, sliderContainer } from '../../animation';
import styled from "styled-components";


const Movies = () => {

  const [page, setPage ] = useState(1);
  const [content, setContent] = useState([]);

  const fetchMovies = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`)
    
    setContent(data.results)

  }

  useEffect(() => {
    fetchMovies();
      // eslint-disable-next-line
  }, [page])
  

  return (
    <>
      <motion.div className='pageTitle' exit="exit"  initial="hidden" animate="show">Movies
        <motion.div variants={sliderContainer}>
          <Frame1 variants={slider}></Frame1>
          <Frame2 variants={slider}></Frame2>
          <Frame3 variants={slider}></Frame3>
          <Frame4 variants={slider}></Frame4>
        </motion.div>
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
    </>
  )
}

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom, #02386E, #00172D);
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #FCC039;
`;
const Frame3 = styled(Frame1)`
  background: linear-gradient(to bottom, #02386E, #00172D);
`;
const Frame4 = styled(Frame1)`
  background: #FCC039;
`;



export default Movies