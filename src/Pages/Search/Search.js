import React from 'react'
import { useState } from 'react';
import { Tab, Tabs, TextField } from '@mui/material';
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import { useEffect } from 'react';
import CustomPagination from '../../components/CustomPagination';
import SingleContent from '../../components/SingleContent';
import { motion } from "framer-motion";




const Search = () => {
 const [type, setType] = useState(0);
 const [page, setPage] = useState(1);
 const [searchText, setSearchText] = useState("")
 const [content, setContent] = useState()
 const [numOfPages, setNumOfPages] = useState();


 const fetchSearch = async () => {

  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
        process.env.REACT_APP_API_KEY
      }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
    );
    setContent(data.results);
    setNumOfPages(data.total_pages);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

 useEffect(() => {
  window.scroll(0, 0);
  fetchSearch();
  // eslint-disable-next-line
}, [page]);

  return (
    <motion.div exit="exit"  initial="hidden" animate="show">
      <div style={{display: "flex",}}>
        <TextField
            label="Search"
            style={{flex: 1}}
            className="Search"
            id="filled-hidden-label-normal"
            variant="filled"
            onChange={(e) => setSearchText(e.target.value)}
          />  

          <Button style={{marginLeft: "15px"}} onClick={fetchSearch}>
             <SearchIcon/>
          </Button>
      </div>
      <Tabs value={type} textColor="primary" onChange={(event, newValue) => {setType(newValue); setPage(1);}}>
          <Tab style={{width: "50%"}} label="Search Movies"/>
          <Tab style={{width: "50%"}} label="Search TV Series"/>
      </Tabs>
      <div>
        <div className='trending'>
            {content && content.map((c) => 
            <SingleContent 
            key={c.id} 
            id={c.id} 
            poster={c.poster_path}
            title={c.title || c.name} 
            date={c.first_air_date || c.release_date}
            media_type={type ? 'tv' : 'Movie'}
            vote_average={c.vote_average}
            />
            )}
             {searchText &&
          !content &&
          (type ? <h2>Nothing Found</h2> : <h2>Nothing Found</h2>)}
        </div>
        {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
    </motion.div>
  )
}


export default Search