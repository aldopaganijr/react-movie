import React from 'react';
import cbsNews from '../images/cbs.png';
import nbcNews from "../images/nbcNews.png";
import abcNews from "../images/abc.png";
import cnn from "../images/cnn.png";
import CT from "../images/CT.png";
import washington from "../images/washington.png";

function Reviews() {
  return (

          <div className='reviews'>
              <a href='https://www.chicagotribune.com/business/ct-biz-blockbuster-oregon-last-one-left-20190307-story.html'>
                <img className="icon" src={CT} alt="CT" />
              </a>

              <a href='https://www.washingtonpost.com/news/business/wp/2018/07/14/why-are-you-still-here-inside-the-last-blockbuster-left-in-america/'>
                <img className="icon" src={washington} alt="washington" />
              </a>

              <a href='https://www.cbsnews.com/news/blockbuster-oregon-bend-store-australia-perth-closing/'>
                <img className="icon" src={cbsNews} alt="cbsNews" />
              </a>

              <a href="https://abcnews.go.com/US/blockbuster-earth-mints-memberships-day/story?id=61505627">
                <img className="icon" src={abcNews} alt="abcNews" />
              </a>

              <a href="https://www.nbcnews.com/news/us-news/inside-last-blockbuster-video-store-america-n892246">
                <img className="icon" src={nbcNews} alt="nbsNews" />
              </a>

              <a href="https://www.cnn.com/2019/03/06/business/last-blockbuster-on-the-planet-trnd/index.html">
                <img className="icon" src={cnn} alt="cnnNews" />
              </a>
          </div>
          

  )
}

export default Reviews