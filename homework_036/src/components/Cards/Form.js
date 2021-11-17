import React, {useState} from 'react'
import Button from "../Ui/Button";
import {useDispatch} from "react-redux";
import {addNewCard} from "../../store/Cards/actionsCreator";

const Form = () => {

    const [card, setCard] = useState({name: '', tel: '', address: ''});
    const dispatch = useDispatch()

    const onChangeField = event => {
        setCard( { ...card, [event.target.name]: event.target.value } )
    }

    const onSubmitForm = event => {
        event.preventDefault()
        dispatch( addNewCard(card) )
        setCard({name: '', tel: '', address: ''})
    }

    return (
        <form>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    onChange={onChangeField}
                    value={card.name}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="tel" className="form-label">Telephone</label>
                <input
                    type="text"
                    className="form-control"
                    id="tel"
                    name="tel"
                    onChange={onChangeField}
                    value={card.tel}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    onChange={onChangeField}
                    value={card.address}
                />
            </div>

            <Button
                clickHandler={onSubmitForm}
                type="submit"
                className="btn btn-sm btn-primary"
                label="Submit"
            />
        </form>
    )
}

export default Form