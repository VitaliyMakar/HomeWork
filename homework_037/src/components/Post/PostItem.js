import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {changeActivePost} from "../../store/Posts/actionsCreator";


export default ({post})=> {

    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.posts)
    const activePost = useSelector(state => state.posts.activePost)


    const changePost = () => {
        dispatch(changeActivePost( post ))
    }

    return (
        <div
            className={
            (!activePost || (post.id !== activePost.id)) ? "items-list__item" : "items-list__item--active"}
            onClick={changePost}
        >
            {post.title}
        </div>
    )
}