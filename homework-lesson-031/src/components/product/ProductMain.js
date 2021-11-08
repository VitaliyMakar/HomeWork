import React, {useEffect, useState} from 'react'
import ProductList from "./ProductList";
import ProductItem from "./ProductItem";
import ProductCategory from "./ProductCategory";

const ProductMain = () => {

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState(null);
    const [activeProductId, setActiveProductId] = useState(null);
    const [productInfo, setProductInfo] = useState(null)

    /*

    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  },
     */

    useEffect(()=>{
        fetchCategories();
    }, []);

    // useEffect(()=>{
    //     fetchProducts();
    // }, []);

    useEffect(()=>{
        if ( !activeCategory ) {
            return;
        }
        fetchProductsByCategory();
    }, [activeCategory]);

    console.log(activeCategory)
    console.log(products)

    useEffect(()=>{
        if ( !activeProductId ) {
            return;
        }
        fetchProductById();
    }, [activeProductId]);

    const fetchCategories = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products/categories');
            setCategories( await response.json() );
        } catch(err) {
            console.log(err.message);
        }
    }

    const fetchProductsByCategory = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products/category/' + activeCategory);
            setProducts( await response.json() );
        } catch(err) {
            console.log(err.message);
        }
    }

    const fetchProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            setProducts( await response.json() );
        } catch(err) {
            console.log(err.message);
        }
    }

    const fetchProductById = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products/' + activeProductId);
            setProductInfo( await response.json() );
        } catch(err) {
            console.log(err.message);
        }
    }

    const changeActiveProductId = (productId) => {
        setActiveProductId(productId);
    }

    const changeActiveCategory = (category) => {
        setActiveCategory(category);
    }

    return (
        <div className="wrapper">


            <div className="productsList">
                <h1>My very first some kind Shop</h1>
                <ProductCategory categories={categories} chooseCategory={changeActiveCategory} />
                <ProductList products={products} chooseProduct={changeActiveProductId} />
            </div>
            <div className="productsCard">
                <ProductItem product={productInfo} />
            </div>
        </div>
    )
}

export default ProductMain