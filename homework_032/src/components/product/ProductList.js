import React, {useContext} from 'react';
import {GlobalContext} from "./GlobalContextProvider";

const ProductList = () => {
    const {products} = useContext(GlobalContext)
    const {changeActiveProductId} = useContext(GlobalContext)

    return (
        <div className="">
            {
                products.map((product) =>
                    <div
                        key={product.id}
                        className="list-group-item"
                        onClick={ ()=>{ changeActiveProductId(product.id) } }
                    >{product.title}</div>)
            }
        </div>
    )
}

export default ProductList;