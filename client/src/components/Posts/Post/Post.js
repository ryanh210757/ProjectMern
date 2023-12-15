import React, {useState} from "react";
import useStyles from "./styles"
import {Button} from '@material-ui/core' 
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useDispatch } from 'react-redux'

import { deletePost } from "../../../actions/posts";

export default function Post({post, setCurrentId}){
    const classes = useStyles()
    const dispatch = useDispatch()
    const [showMenu, setShowMenu] = useState(false)

    return (
       <div>
        <img  src={post.selectedFile} />
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={() => {setCurrentId(post._id)}}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
       
        <h2>{post.title}</h2>
       
            <h5>{showMenu ? `Show Less` : 'More Info'}</h5>
            <ArrowDropDownIcon fontSize="small" onClick={() => setShowMenu(!showMenu)}/>
            <p>{showMenu ? `${post.message}` : ''}</p>
            <Button size="small" color="primary" onClick={() => {dispatch(deletePost(post._id))}}>
                <DeleteIcon fontSize="small"/>
                Delete
            </Button>

       </div>
    )
}