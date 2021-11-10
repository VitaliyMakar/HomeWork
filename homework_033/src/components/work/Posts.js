import React, {useContext} from "react";
import {GlobalContext} from "./GlobalContextComponent";
import Users from "./Users";

const Posts = () => {

    const {posts} = useContext(GlobalContext)
    const {activeUser} = useContext(GlobalContext)
    return (
        <div className="work-container">
            <Users/>
            <div>
                {
                    posts.map((post) => (
                            <div
                                key={post.id}
                                className={post.completed ? "completed" : ""}
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