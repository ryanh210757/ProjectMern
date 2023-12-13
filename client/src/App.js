import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import {getPosts} from './actions/posts'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import "./index.css"


export default function App(){
    const [currentId, setCurrentId] = useState(null)  //keep track of currentID
 
    const dispatch = useDispatch()
    const linksArray = ["Menu", "About Us"]
    useEffect(() => {
        dispatch(getPosts())
    }, [currentId, dispatch])

    return (
        <>
            <Posts className="posts-container" setCurrentId={setCurrentId}/>
            <Form currentId={currentId} setCurrentId={setCurrentId}/>
        </>
    )
}