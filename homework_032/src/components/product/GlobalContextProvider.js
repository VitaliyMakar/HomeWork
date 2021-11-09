import React, {createContext, useEffect, useState} from 'react';

export const GlobalContext = createContext({});

const GlobalContextProvider = (props) => {

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState(null);
    const [activeProductId, setActiveProductId] = useState(null);
    const [product, setProduct] = useState(null)

    useEffect(() => {
        fetchCategories();
    }, []);


    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        if (!activeCategory) {
            return;
        }
        fetchProductsByCategory();
    }, [activeCategory]);

    useEffect(() => {
        if (!activeProductId) {
            return;
        }
        fetchProductById();
    }, [activeProductId]);

    const fetchCategories = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products/categories');
            setCategories(await response.json());
        } catch (err) {
            console.log(err.message);
        }
    }

    const fetchProductsByCategory = async () => {
        if (activeCategory === "seeAll") {
            fetchProducts()
        } else {
            try {
                const response = await fetch('https://fakestoreapi.com/products/category/' + activeCategory);
                setProducts(await response.json());
            } catch (err) {
                console.log(err.message);
            }
        }
    }

    const fetchProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            setProducts(await response.json());
        } catch (err) {
            console.log(err.message);
        }
    }

    const fetchProductById = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products/' + activeProductId);
            setProduct(await response.json());
        } catch (err) {
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
        <GlobalContext.Provider value={{
            categories,
            products,
            activeCategory,
            activeProductId,
            product,
            changeActiveCategory,
            changeActiveProductId
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider