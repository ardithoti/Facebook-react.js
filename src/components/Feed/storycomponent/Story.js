import React from 'react'

import {Avatar} from "@material-ui/core";

import "../../../css/Feed/storycomponent/Story.css";

function Story({image, storypicSrc, title}) {
    return (
        <div className="story" style={{backgroundImage: `url(${image})`}}>
            
            <Avatar className="story__avatar" src={storypicSrc} />
            <h4 className="story__title">{title}</h4>
        </div>
    )
}

export default Story
