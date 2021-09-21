import React from 'react'

//components
import Storyreel from "./Storyreel";
import CreatePosts from './Posts/CreatePosts';
import Posts from "./Posts/Posts";
import { useStateValue } from '../../StateProvider';
//css
import "../../css/Feed/Feed.css";
import db from '../../firebase';
import { useState } from 'react';
import { useEffect } from 'react';
function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").
        orderBy("timestamp","desc")
        .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({id: doc.id, data: doc.data()}))));
    },[]);




    const [{user},dispatch] = useStateValue();
    return (
        <div className="feed">
        <Storyreel/>
        <CreatePosts/>
        {posts.map((post) => (
            <Posts
                key={post.id}
                profilePic={post.data.profilePic}
                message={post.data.message}
                timestamp={post.data.timestamp}
                username={post.data.username}
                image={post.data.image}
            />
        ))}
        </div>
    )
}

export default Feed
