import React from 'react'
import {useState} from "react";
import { useStateValue } from '../../StateProvider';

//compoonents
import Story from "./storycomponent/Story";

//css
import "../../css/Feed/Storyreel.css";

function Storyreel() {
    const [{user},dispatch] = useStateValue();
    return (
        <div className="storyReel">

        <Story 
            image="https://picsum.photos/200/300"
            storypicSrc={user.photoURL}
            title={user.displayName}
        />
        <Story 
            image="https://picsum.photos/200/300?grayscale"
            storypicSrc={user.photoURL}
            title={user.displayName}
        />

        <Story 
            image="https://picsum.photos/200/300/?blur"
            storypicSrc={user.photoURL}
            title={user.displayName}
        />

        <Story 
            image="https://picsum.photos/id/237/200/300"
            storypicSrc={user.photoURL}
            title={user.displayName}
        />

        <Story 
            image="https://picsum.photos/200/300/?blur=2"
            storypicSrc={user.photoURL}
            title={user.displayName}
        />

   
        </div>
    )
}

export default Storyreel
