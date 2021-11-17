import React from 'react'
import Button from "../Ui/Button";
import {useDispatch} from "react-redux";
import { removeCard } from "../../store/Cards/actionsCreator";

const Item = ({item}) => {

    const dispatch = useDispatch()

    const removeItem = () => dispatch( removeCard( item.id ) )

    return (
        <div className="row">
            <div className="col-sm-8">
                <div className="card">
                    <h3 className="card-title">{item.name}</h3>
                    <div className="card-body">
                        <p className="card-text">{item.tel}</p>
                        <p className="card-text">{item.address}</p>
                    </div>
                    <Button
                        label="Remove"
                        className="btn btn-danger btn-sm"
                        type="button"
                        clickHandler={removeItem}
                    />
                </div>

            </div>
            {/*<div className="col-sm-4">*/}
            {/*    <Button*/}
            {/*        label="Remove"*/}
            {/*        className="btn btn-danger btn-sm"*/}
            {/*        type="button"*/}
            {/*        clickHandler={removeItem}*/}
            {/*    />*/}
            {/*</div>*/}


        </div>


    )
}

export default Item