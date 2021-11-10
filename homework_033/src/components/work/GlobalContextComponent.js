import React, {createContext, useEffect, useState} from "react";

export const GlobalContext = createContext(null);

const GlobalContextComponent = (props) => {

    const [users, setUsers] = useState([])
    const [activeUser, setActiveUser] = useState(null)
    const [todos, setTodos] = useState([])
    const [posts, setPosts] = useState([])
    const [albums, setAlbums] = useState([])


    useEffect(() => {
        fetchUsers()
    }, [])

    useEffect(() => {
        if (!activeUser) return;
        fetchTodos()
        fetchPosts()
        fetchAlbums()
    }, [activeUser])


    const fetchUsers = async () => {
        try {
            const resp = await fetch('https://jsonplaceholder.typicode.com/users')
            setUsers(await resp.json())
        } catch (e) {
            console.log(e.message)
        }
    }

    const fetchTodos = async () => {
        try {
            const resp = await fetch('https://jsonplaceholder.typicode.com/todos?userId='+activeUser.id)
            setTodos(await resp.json())
        } catch (e) {
            console.log(e.message)
        }
    }

    const fetchPosts = async () => {
        try {
            const resp = await fetch('https://jsonplaceholder.typicode.com/posts?userId='+activeUser.id)
            setPosts(await resp.json())
        } catch (e) {
            console.log(e.message)
        }
    }

    const fetchAlbums = async () => {
        try {
            const resp = await fetch('https://jsonplaceholder.typicode.com/albums?userId='+activeUser.id)
            setAlbums(await resp.json())
        } catch (e) {
            console.log(e.message)
        }
    }

    return (
        <GlobalContext.Provider value={
            {
                users,
                activeUser,
                todos,
                posts,
                albums,
                setActiveUser
            }
        }>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextComponent;