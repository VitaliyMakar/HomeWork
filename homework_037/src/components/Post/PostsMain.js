import React from "react";
import UsersList from "../Users/UsersList";
import PostsList from "./PostsList";
import CommentsList from "../Comments/CommentsList";
import ActiveComment from "../Comments/ActiveComment";

function PostsMain() {
    return (
        <div className="main-container">
            <div className="user-list">
                <UsersList/>
            </div>
            <div className="items-list">
                <PostsList/>
            </div>
            <div className="items-list">
                <CommentsList/>
            </div>
            <>
                <ActiveComment/>
            </>

        </div>
    )
        ;
}

export default PostsMain;