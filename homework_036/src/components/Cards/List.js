import React from 'react'
import {useSelector} from "react-redux";
import Item from "./Item";

const List = () => {

    const list = useSelector(state => state.cards.list)

    return !list.length ? (<h2>Find yourself some friends</h2>) : (
        <div className="list-group">
            {list.map(item => <Item key={item.id} item={item} />)}
        </div>
    )
}

export default List