import React from 'react'
import { StyledVideoOverlay, StyledYoutubeDiv } from './youtubeStyles'
import Overlay from "../../assets/images/youtube/alt.gif"
import play from "../../assets/images/youtube/play.svg"
const Youtube = () => {
  return (
    <StyledYoutubeDiv>
        <p>Away from photoshop and the football field, I keep busy by spinning up some slick afro music on channel. </p>
        <StyledVideoOverlay>
        <div className='over'></div>
        <img src={Overlay} />
        <img src={play} className="playBtn"/>
<iframe width="560" height="315" src="https://www.youtube.com/embed/Vnp1ARNaoKU?autoplay=1&fs=1&fullscreen=1" title="YouTube video player" frameborder="0" allow="fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        </StyledVideoOverlay>
    </StyledYoutubeDiv>
  )
}

export default Youtube