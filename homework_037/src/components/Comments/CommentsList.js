import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCommentsById} from "../../store/Comments/actionsCreator";
import CommentItem from "./CommentItem";

const CommentsList = () => {

    const dispatch = useDispatch()
    const comments = useSelector(state => state.comments.comments)
    const activeComment = useSelector(state => state.comments.activeComment)
    const activePost = useSelector(state => state.posts.activePost)
    const activeUser = useSelector(state => state.users.activeUser)


    useEffect(() => {
        if (activePost) dispatch(getCommentsById(activePost.id))
    }, [activePost])

    const renderComments = () => {
        return comments.map(comment => <CommentItem key={comment.id} comment={comment}/>)

        // !todos.length
        //     ? (<h2>No User selected</h2>)
        //     : todos.map(todo => <TodoItem key={todo.id} todo={todo}/>)

    }

    return (


        <div>
            <h2 className="items-list__list-head">Comments from: {!activePost ? "...Click on Post" : activePost.title}</h2>
            <h2 className="items-list__list-head">...Click on Comment to read</h2>

            <div className="">
                {renderComments()}
            </div>
        </div>
    )
}

export default CommentsList