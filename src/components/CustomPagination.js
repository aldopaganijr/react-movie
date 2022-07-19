import React from 'react'
import { Pagination } from '@mui/material'
import {createTheme, ThemeProvider } from '@mui/material/styles';



const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const CustomPagination = ({setPage, numOfPages = 10}) => {

    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    }

    return (
    <ThemeProvider theme={darkTheme}>
      <Pagination style={{width: "100%", display: "flex", justifyContent: "center", marginTop: "10"}} onChange={(e) => handlePageChange(e.target.textContent)} count={numOfPages} variant="outlined" color="primary" hideNextButton hidePrevButton />
    </ThemeProvider>
  )
}

export default CustomPagination

