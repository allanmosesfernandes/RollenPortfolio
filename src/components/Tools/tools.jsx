import React from 'react'
import { ToolsContainer, ToolsContainerBodyCopy, ToolsImages } from './toolsStyled'
import photoshop from "../../assets/images/tools/photoshop.png";
import photoshop from "../../assets/images/tools/photoshop.png";



const Tools = () => {
  return (
    <ToolsContainer>
        <div className="wrapper">
        <h2>Skills & Tools:</h2>
        <ToolsContainerBodyCopy>
            These are some of the tools I use on the daily, however the list also includes tools I've dabbled with and might not use them as often as I would like to since I've found alternatives but regardless they lie in my repository if push comes to shove.
        </ToolsContainerBodyCopy>
        <ToolsImages>
        <div className="iconText">
            <img src={photoshop} alt='photoshop' />
            <p>Adobe Photoshop</p>
        </div>
        <div className="iconText">
            <img src={photoshop} alt='photoshop' />
            <p>Adobe Photoshop</p>
        </div>
        <div className="iconText">
            <img src={photoshop} alt='photoshop' />
            <p>Adobe Photoshop</p>
        </div>
        <div className="iconText">
            <img src={photoshop} alt='photoshop' />
            <p>Adobe Photoshop</p>
        </div>

        </ToolsImages>
        </div>

    </ToolsContainer>
  )
}

export default Tools