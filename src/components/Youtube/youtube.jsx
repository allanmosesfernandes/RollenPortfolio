import React from 'react'
import { StyledVideoOverlay, StyledYoutubeDiv } from './youtubeStyles'
import Overlay from "../../assets/images/youtube/alt.gif"
import play from "../../assets/images/youtube/play.svg"
import YoutubeVideo from '../youtubeVideo'
const Youtube = () => {
  return (
    <StyledYoutubeDiv>
        <p>Away from photoshop and the football field, I keep busy by spinning up some slick afro music on channel. </p>
        <StyledVideoOverlay>
        <div className='over'></div>
        <img src={Overlay} />
        <img src={play} className="playBtn"/>
        <YoutubeVideo src="https://www.youtube.com/embed/1CRjyUHXUek" title="mix" />
        </StyledVideoOverlay>
    </StyledYoutubeDiv>
  )
}

export default Youtube
