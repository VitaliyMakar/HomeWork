import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPostsById} from "../../store/Posts/actionsCreator";
import PostItem from "./PostItem";

const PostsList = () => {

    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.posts)
    const activeUser = useSelector(state => state.users.activeUser)

    useEffect(() => {
        if (activeUser) dispatch(getPostsById(activeUser.id))
    }, [activeUser])

    const renderPosts = () => {
        return posts.map(post => <PostItem key={post.id} post={post}/>)

        // !todos.length
        //     ? (<h2>No User selected</h2>)
        //     : todos.map(todo => <TodoItem key={todo.id} todo={todo}/>)

    }

    return (


        <div>
            <h2 className="items-list__list-head">Posts from: {!activeUser ? "...Click on User" : activeUser.name}</h2>

            <div className="">
                {renderPosts()}
            </div>
        </div>
    )
}

export default PostsList