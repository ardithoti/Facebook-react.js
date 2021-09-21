import React from 'react'

//components
import {Avatar} from "@material-ui/core";

//icons
import ThumbsUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreOutlined from "@material-ui/icons/ExpandMoreOutlined";
import { useStateValue } from '../../../StateProvider';
//css
import "../../../css/Feed/Posts/Posts.css";

function Posts({profilePic, image, username, timestamp, message}) {
    const [{user},dispatch] = useStateValue();

    
    return (
        <div className="posts">
            <div className="posts__top">
                <Avatar src={profilePic}
                className="posts__avatar" />
            <div className="posts__topInfo">
                <h3>{username}</h3>
                <p>{new Date(timestamp?.toLocaleString()).toLocaleString()}</p>
               
            </div>
            </div>

            <div className="posts__bottom">
                <p>{message}</p>

            </div>

            <div className="posts__image">
               <img src={image} alt="" />
                
            </div>

            <div className="posts__options">
                <div className="posts__option">
                    <ThumbsUpIcon />
                    <p>Like</p>
                </div>
                <div className="posts__option">
                    <ChatBubbleOutlineIcon/>
                    <p>Comment</p>
                </div>
                <div className="posts__option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="posts__option">
                    <AccountCircleIcon />
                    <ExpandMoreOutlined />
                    <p>Share</p>
                </div>
            </div>

        </div>
    )
}

export default Posts
