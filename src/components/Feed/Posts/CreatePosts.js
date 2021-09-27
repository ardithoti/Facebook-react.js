import React from 'react';
import {useState} from "react";


//css
import "../../../css/Feed/Posts/CreatePosts.css";

//icons
import {Avatar} from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibrary from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

import { useStateValue } from '../../../StateProvider';
import db from "../../../firebase";
import firebase from "../../../firebase";


function CreatePosts() {
    const [{user},dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        db.collection("posts").add({
            message: input,
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,
            timestamp: new Date()
        })



        
    setInput("");
    setImageUrl("");
    }



    return (
        <div className="createposts">
            <div className="createposts__headertop">
                <Avatar src={user.photoURL}/>
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} className="createposts__input" type="text" placeholder={`What's on your mind, ${user.displayName}?`}/>
                    <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Paste the url to load your img"/>

                    <button onClick={handleSubmit} type="submit">Submit</button>
                </form>
                
            </div>
            <div className="createposts__headerbottom">

                <div className="createposts__option">
                <VideocamIcon style={{color:"red"}} />
                <h3>Live Video</h3>
                </div>

                <div className="createposts__option">
                <PhotoLibrary style={{color:"green"}} />
                <h3>Photo/Video</h3>
                </div>

                <div className="createposts__option">
                <InsertEmoticonIcon style={{color:"orange"}} />
                <h3>Feeling/Activity</h3>
                </div>
                

            </div>
        </div>
    )
}

export default CreatePosts
