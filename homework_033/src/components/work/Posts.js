import React, {useContext} from "react";
import {GlobalContext} from "./GlobalContextComponent";
import Users from "./Users";

const Posts = () => {

    const {posts, activeUser} = useContext(GlobalContext)

    return (
        <div className="work-container">
            <Users/>
            <div className="work-container__list">
                <div className="work-container__list--active-user">Posts
                    from {!activeUser ? "...Click on User" : activeUser.name}</div>
                {
                    posts.map((post) => (
                            <div
                                key={post.id}
                                className="work-container__list-item"
                            >
                                {post.title}
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Posts;