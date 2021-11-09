import React, {useContext} from 'react'
import {GlobalContext} from "./GlobalContextProvider";

const ProductItem = () => {
    const {product} = useContext(GlobalContext)

    return !product
        ? (<div>Choose product in left side</div>)
        : (
            <div className="card">
                <img src={product.image} alt={product.title} className="card__image"/>
                <div className="card__body">
                    <h5 className="card__title">{product.title}</h5>
                    <p className="card__text">{product.description}</p>
                    <p className="card__text">${product.price}</p>
                </div>
            </div>
        )
}

export default ProductItem;