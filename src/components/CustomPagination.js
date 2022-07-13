import React from 'react'
import { Pagination } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { light } from '@mui/material/styles/createPalette';


const darkTheme = createTheme({
      pallete: {
        color: "light",
      }

    });

const CustomPagination = ({setPage, numOfPages = 10}) => {

    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    }

    return (
    <ThemeProvider theme={darkTheme}>
        <div style={{width: "100%", display: "flex", justifyContent: "center", marginTop: "10"}}>
            <Pagination onChange={(e) => handlePageChange(e.target.textContent)} count={numOfPages} variant="outlined" color="info" hideNextButton hidePrevButton />
        </div>
    </ThemeProvider>
  )
}

export default CustomPagination

