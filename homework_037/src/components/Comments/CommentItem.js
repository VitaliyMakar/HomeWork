import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {changeActiveComment} from "../../store/Comments/actionsCreator";


export default ({comment})=> {

    const dispatch = useDispatch()
    const activeComment = useSelector(state => state.comments.activeComment)


    const changeComment = () => {
        dispatch(changeActiveComment( comment ))
    }

    return (
        <div
            className={
            (!activeComment || (comment.id !== activeComment.id)) ? "items-list__item" : "items-list__item--active"}
            onClick={changeComment}
        >
            {comment.name}
        </div>
    )
}