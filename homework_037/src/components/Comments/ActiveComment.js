import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {changeActiveComment} from "../../store/Comments/actionsCreator";

const ActiveComment = () => {

    const activeComment = useSelector(state => state.comments.activeComment)
    const dispatch = useDispatch()

    const removeComment = () => {
        dispatch(changeActiveComment( null ))
    }

    return !activeComment ? ('') : (
        <div className="modal-window">
            <div className="modal-wrapper">
                <h2>{activeComment.name}</h2>
                <p>eMail: {activeComment.email}</p>
                <p>Comment: <br/>
                    {activeComment.body}
                </p>
                <button
                    className="modal-button"
                    onClick={removeComment}>Close</button>
            </div>


        </div>
    )
}

export default ActiveComment;