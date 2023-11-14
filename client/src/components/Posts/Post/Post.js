import React, {useState} from "react";
import useStyles from "./styles"
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core' 
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import moment from 'moment'
import { useDispatch } from 'react-redux'

import { deletePost } from "../../../actions/posts";

export default function Post({post, setCurrentId}){
    const classes = useStyles()
    const dispatch = useDispatch()
    const [showMenu, setShowMenu] = useState(false)

    return (
       <Card className={classes.card}>
        <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
        <div className={classes.overlay}>
            <Typography variant="h6">{post.creator}</Typography>
            <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
        </div>
        <div className={classes.overlay2}>
            <Button style={{color: 'white'}} size="small" onClick={() => {setCurrentId(post._id)}}>
                <MoreHorizIcon fontSize="default" />
            </Button>
        </div>
       
        <Typography className={classes.title} variant="h5" color="gutterBottom">{post.title}</Typography>
        <CardContent>
            <Typography variant="h7" color="gutterBottom">{showMenu ? `Show Less` : 'More Info'}</Typography>
            <ArrowDropDownIcon fontSize="small" onClick={() => setShowMenu(!showMenu)}/>
            <Typography variant="h5" color="gutterBottom">{showMenu ? `${post.message}` : ''}</Typography>

        </CardContent>
        <CardActions className={classes.cardActions}>
            <Button size="small" color="primary" onClick={() => {}}>
                <ThumbUpAltIcon fontSize="small"/>
                Like
                {post.likeCount}
            </Button>
            <Button size="small" color="primary" onClick={() => {dispatch(deletePost(post._id))}}>
                <DeleteIcon fontSize="small"/>
                Delete
            </Button>
        </CardActions>
       </Card>
    )
}