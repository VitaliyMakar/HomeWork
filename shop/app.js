const productsContainer = document.querySelector("#productsContainer");
// const categoryContainer = document.querySelector("#categoryContainer");
const categorySelectContainer = document.querySelector("#categorySelectContainer");
const selectAllItems = document.querySelector("#selectAllItems");
const formAddCard = document.querySelector("#form-addCard");

const imgLink = document.querySelector("#imgLink");
const itemName = document.querySelector("#itemName");
const itemDescription = document.querySelector("#itemDescription");
const itemPrice = document.querySelector("#itemPrice");
const categoryName = document.querySelector("#categoryName");

const categories = [
    {
        categoryId: 1,
        categoryName: "Fruit & Vegetables",
        categoryDescription: "Fresh Fruit & Vegetables",
    },
    {
        categoryId: 2,
        categoryName: "Bakery",
        categoryDescription: "Oven fresh bakery",
    },
    {
        categoryId: 3,
        categoryName: "Drinks",
        categoryDescription: "Water, Juices, Alcoholic drinks",
    },
    {
        categoryId: 4,
        categoryName: "Foodstuffs",
        categoryDescription: "Ready Meals, Pasta & Rice, Meat",
    },
];

class Product {
    constructor(imgLink, itemName, itemDescription, itemPrice, categoryId) {
        this.id = Math.floor(Math.random() * Date.now());
        this.imgLink = imgLink;
        this.itemName = itemName;
        this.itemDescription = itemDescription;
        this.itemPrice = itemPrice;
        this.categoryId = +categoryId;
    }
}

let products = [
    {
        imgLink: "#",
        itemName: "Apple",
        itemDescription: "Green Apple",
        itemPrice: "1",
        categoryId: 1,
    },
];

const renderCategory = () => {
    categories.forEach((category) => {
        const selectOption = document.createElement("option");
        selectOption.textContent = category.categoryName;
        selectOption.value = category.categoryId;
        categorySelectContainer.append(selectOption);
    });

    // const categoryList = document.createElement('ul')
    // const selectOptionAll = document.createElement('li')
    // selectOptionAll.textContent = 'Select All'
    // selectOptionAll.addEventListener('click', event => {
    //     renderAllProducts(products)
    // })
    // categoryList.append(selectOptionAll)

    // categories.forEach(category => {
    //     const selectOption = document.createElement('li')
    //     selectOption.textContent = category.categoryName
    //     categoryList.append(selectOption)
    //     selectOption.addEventListener('click', event => {
    //         selectProductsByCategory(category.categoryId)
    //         console.log(category.categoryId)
    //     })
    // })
    // categoryContainer.append(categoryList)
};

categorySelectContainer.addEventListener("change", (event) => {
    event.preventDefault();

    if (event.target.value === "all") {
        renderAllProducts(products);
    } else {
        selectProductsByCategory(+event.target.value);
    }
});

renderCategory();

const selectProductsByCategory = (categoryId) => {
    renderAllProducts(
        products.filter((product) => product.categoryId === categoryId)
    );
};

const renderProduct = (product) => {
    const productItem = document.createElement("div");
    productItem.className = "productCard";
    productItem.innerHTML = `
    <div class="productCard__image">
        <img src="${product.imgLink}" alt="">
    </div>
    <h2>${product.itemName}</h2>
    <p>${product.itemDescription}</p>
    <p>${product.itemPrice}</p>
    <p>${product.id}</p>
    <p>${product.categoryId}</p>
    `;
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Delete";
    btnDelete.addEventListener("click", (event) => {
        event.preventDefault();
        removeElement(product.id);
        storageItem();
    });
    productItem.append(btnDelete);
    productsContainer.append(productItem);
};

const removeElement = (productId) => {
    products = products.filter((item) => item.id !== productId);
    renderAllProducts(products);
};

const renderAllProducts = (productsList) => {
    productsContainer.innerHTML = "";
    productsList.forEach((product) => {
        renderProduct(product);
    });
};

renderAllProducts(products);

const selectFill = () => {
    categoryName.innerHTML = categories
        .map(
            (category) =>
                `<option value="${category.categoryId}">${category.categoryName}</option>`
        )
        .join("\n");
};

selectFill();

formAddCard.addEventListener("submit", (event) => {
    event.preventDefault();
    products.push(
        new Product(
            imgLink.value,
            itemName.value,
            itemDescription.value,
            itemPrice.value,
            categoryName.value
        )
    );
    productsContainer.innerHTML = ``;
    products.forEach((product) => {
        renderProduct(product);
    });
    storageItem();
    productsContainer.lastChild.style.backgroundColor = "red";
    setTimeout(() => {
        productsContainer.lastChild.style.backgroundColor = "transparent";
    }, 3000);
});

const getProducts = () => {
    // const temp = JSON.parse(localStorage.getItem('products'));
    // products = temp ? temp : []

    products = JSON.parse(localStorage.getItem("products")) ?? [];
    renderAllProducts(products);
};

const storageItem = () => {
    localStorage.setItem("products", JSON.stringify(products));
};

getProducts();
