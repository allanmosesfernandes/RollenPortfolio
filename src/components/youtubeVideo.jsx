import React from 'react'

const YoutubeVideo = ({ src,title }) => {
  return (
    <iframe
      className="youtube-video"
      src={src}
      title={title}
      allow="accelerometer; autoplay; encrypted-media; gyroscope;  picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    ></iframe>
  );
}

export default YoutubeVideo;