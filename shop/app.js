const productContainer = document.querySelector('#products')
const categoryContainer = document.querySelector('#category')
const formAddCard = document.querySelector('#form-addCard')

const img_link = document.querySelector('#img_link')
const name = document.querySelector('#name')
const description = document.querySelector('#description')
const price = document.querySelector('#price')
const category_name = document.querySelector('#category_name')

const categories = [
    {
        id: 1,
        category_name: 'Fruits',
        description: 'Fresh Fruits'
    },
    {
        id: 2,
        category_name: 'Vegetables',
        description: 'Fresh Vegetables'
    },
    {
        id: 3,
        category_name: 'Greens',
        description: 'Fresh Greens'
    },
]

class Product {
    constructor(category_id, name, img_link, description, price) {
        this.id = (Math.floor(Math.random() * Date.now()));
        this.name = name;
        this.category_id = +category_id;
        this.img_link = img_link;
        this.description = description;
        this.price = price;
    }
}

const products = [
    {
        category_id: 1,
        name: 'Apple',
        img_link: '#',
        description: 'green Apple',
        price: '1$'
    }
]

const renderCategory = () => {
    const category_ele = document.createElement('ul')
    categories.forEach(category => {
        const li = document.createElement('li')
        li.textContent = category.category_name + " " + category.description
        category_ele.append(li)
        li.addEventListener('click', event => {
            selectProductsByCategory(category.id)
        })
    })
    categoryContainer.append(category_ele)
}

const selectProductsByCategory = (argument) => {
    console.log(argument)
    renderAllProducts(products.filter(product => product.category_id === argument))
}

const renderProduct = (product) => {
    const product_ele = document.createElement('div')
    product_ele.className = 'productCard'

    product_ele.innerHTML = `
    <div class="productCard__image">
        <img src="${product.img_link}" alt="">
    </div>
    <h2>${product.name}</h2>
    <p>${product.description}</p>
    <span>${product.price}</span>
    <span>${product.id}</span>

    `
    productContainer.append(product_ele)
}

const renderAllProducts = (productsArray) => {
productContainer.innerHTML = ''
    productsArray.forEach(product => {
        renderProduct(product)
    })
}

const selectFill = () => {
    category_name.innerHTML = categories.map(cat => `<option value="${cat.id}">${cat.category_name}</option>`).join("\n")
}

selectFill()
renderCategory()
renderAllProducts(products)

formAddCard.addEventListener('submit', (event) => {
    event.preventDefault()
    products.push(new Product(category_name.value, name.value, img_link.value, description.value, price.value))
    productContainer.innerHTML = ``
    products.forEach(product => {
        renderProduct(product)
    })
})