import React, {useContext} from 'react';
import {GlobalContext} from "./GlobalContextProvider";

const ProductCategory = () => {
const {categories} = useContext(GlobalContext)
const {changeActiveCategory} = useContext(GlobalContext)

    return (
        <select className="productsCategory" id="" onChange={ (event)=>{ changeActiveCategory(event.target.value) } }>
           <option value="seeAll">See All</option>
            {
                categories.map((category) =>
                    <option
                        key={category}
                        value={category}
                        id=""
                        >{category}
                    </option>)
            }
        </select>)
}

export default ProductCategory;