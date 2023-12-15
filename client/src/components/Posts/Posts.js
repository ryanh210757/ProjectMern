import React from "react";
import {Grid, CircularProgress} from '@material-ui/core'
import {useSelector} from "react-redux"
import Post from "./Post/Post"
import useStyles from './styles'

export default function Posts({setCurrentId}){
    const posts = useSelector((state) => state.posts)
    const classes = useStyles()

    console.log(posts)
    return (
        !posts.length ? <CircularProgress /> : posts.map((post) =>(
            <Post post={post} setCurrentId={setCurrentId}/>
         ))
    )
}
    
   
    
