import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { img_500 } from '../config';
import { unavailable } from '../config';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  background: "linear-gradient(to bottom, #02386E, #00172D)",
  boxShadow: 24,
  border: '2px solid #FCC039',
  pt: 2,
  px: 4,
  pb: 3,
};


export default function ContentModal({children, media_type, id}) {
  const [open, setOpen] = React.useState(false);
  const [content, setContent] = useState();
  const [video, setVideo] = useState();


  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  
  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );

    setContent(data);
    // console.log(data);
  };

  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );

    setVideo(data.results[0]?.key);
  };

  useEffect(() => {
    fetchData();
    fetchVideo();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Button onClick={handleOpen}>{children}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className='box' sx={{ ...style, width: "50%", height: "50%", borderRadius: "2%"}}>
        {content && (
        <div className='contentModal'>
            <img src={ content.poster_path ? `${img_500}/${content.poster_path}` : unavailable}
                    alt={content.name || content.title}
                    className="contentModalPortrait"
                    />

            <div className="contentModalAbout">
                  <span className="contentModalTitle">
                    {content.name || content.title} (
                    {(
                      content.first_air_date ||
                      content.release_date ||
                      "-----"
                    ).substring(0, 4)}
                    )
                  </span>
                  {content.tagline && (
                    <i className="tagline">{content.tagline}</i>
                  )}

                  <span className="contentModalDescription">
                    {content.overview}
                  </span>
                  <Button
                    className='link'
                    variant="contained"
                    startIcon={<YouTubeIcon />}
                    color="warning"
                    target="__blank"
                    href={`https://www.youtube.com/watch?v=${video}`}
                  >
                    Watch the Trailer
                  </Button>
            </div>
        </div>
        )}           
        </Box>
      </Modal>
    </>
  );
}
