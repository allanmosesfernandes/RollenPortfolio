import React from 'react'
import { ToolsContainer, ToolsContainerBodyCopy, ToolsImages } from './toolsStyled'
import photoshop from "../../assets/images/tools/photoshop.png";
import premierpro from "../../assets/images/tools/premierpro.png";
import illustrator from "../../assets/images/tools/illustrator.png";
import lightroom from "../../assets/images/tools/lightroom.png";
import aftereffects from "../../assets/images/tools/aftereffects.png";
import affinity from "../../assets/images/tools/affinity.png";
import capcut from "../../assets/images/tools/capcut.png";

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
            <p>Photoshop</p>
        </div>
        <div className="iconText">
            <img src={premierpro} alt='photoshop' />
            <p>Premier Pro</p>
        </div>
        <div className="iconText">
            <img src={lightroom} alt='photoshop' />
            <p>Lightroom</p>
        </div>
        <div className="iconText">
            <img src={illustrator} alt='photoshop' />
            <p>Illustrator</p>
        </div>
        <div className="iconText">
            <img src={aftereffects} alt='photoshop' />
            <p>After Effects</p>
        </div>
        <div className="iconText">
            <img src={affinity} alt='photoshop' />
            <p>Afinity Photo</p>
        </div>
        <div className="iconText">
            <img src={capcut} alt='photoshop' />
            <p>Capcut</p>
        </div>
        <div className="iconText">
            <img src={illustrator} alt='photoshop' />
            <p>Illustrator</p>
        </div>

        </ToolsImages>
        </div>

    </ToolsContainer>
  )
}

export default Tools