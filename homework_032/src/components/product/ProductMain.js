import React from 'react'

import ProductList from "./ProductList";
import ProductItem from "./ProductItem";
import ProductCategory from "./ProductCategory";

const ProductMain = () => {
    return (
        <div className="wrapper">
            <div className="productsList">
                <h1>My very first some kind Shop</h1>
                <ProductCategory />
                <ProductList  />
            </div>
            <div className="productsCard">
                <ProductItem />
            </div>
        </div>
    )
}

export default ProductMain