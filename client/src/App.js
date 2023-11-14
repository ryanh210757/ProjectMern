import React, {useState, useEffect} from 'react'
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'
import { useDispatch } from 'react-redux'

import {getPosts} from './actions/posts'
import cheesecake from './images/IMG_3362.jpg'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import useStyles from './styles'
import Navbar from './components/Navbar'

export default function App(){
    const [currentId, setCurrentId] = useState(null)  //keep track of currentID
    const classes = useStyles()
    const dispatch = useDispatch()
    const linksArray = ["Menu", "About Us"]
    useEffect(() => {
        dispatch(getPosts())
    }, [currentId, dispatch])

    return (
        <>
        <Container max-width="lg">
            <Navbar links={linksArray} />
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Cheesecakes Galore & More</Typography>
                <img className={classes.image}src={cheesecake} alt="homephoto" height="60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
        </>
    )
}