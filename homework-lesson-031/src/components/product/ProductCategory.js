import React from 'react';

const ProductCategory = ({categories, chooseCategory}) => {

    return (
        // <select className="productsCategory" id="">
        //     {
        //         categories.map((category) =>
        //
        //             <option
        //                 key={category}
        //                 value={category}
        //                 id=""
        //                 onChange={ (event)=>{ chooseCategory(event.target.value) } }
        //                 >{category}
        //             </option>)
        //     }
        // </select>)

        <div className="productsCategory" id="">
            {
                categories.map((category) =>
                    <div
                        key={category}
                        className="productsCategory__list"
                        onClick={ ()=>{ chooseCategory(category) } }
                    >{category}</div>)
            }
        </div>)
}

export default ProductCategory;