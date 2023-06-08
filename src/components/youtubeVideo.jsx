import React from 'react'
import styled from 'styled-components';

const StyledYoutubePlayer = styled.iframe`
width: 100%;
height: auto;
aspect-ratio: 16 / 9;
`

const YoutubeVideo = ({ src,title }) => {
  return (
    <StyledYoutubePlayer
      className="youtube-video"
      src={src}
      title={title}
      allow="accelerometer; autoplay; encrypted-media; gyroscope;  picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    ></StyledYoutubePlayer>
  );
}

export default YoutubeVideo;