const pathToImages = 'img';
const pathToProductsImages = `${pathToImages}/featured`;
const featuredItemsEl = document.querySelector('.featuredItems');

/**
 * @param {ProductDTO} product 
 * @returns {string} 
 */
function getProductMarkup(product) {
    return `
        <div class="featuredItem">

            <div class="featuredImgWrap">
                <img src="${pathToProductsImages}/${product.image}" alt="${product.name}">
                <div class="featuredImgDark">
                    <button data-productId="${product.id}">
                        <img src="${pathToImages}/menu/cart.svg" alt="">
                        Add to Cart
                    </button>
                </div>
            </div>

            <div class="featuredData">
                <div class="featuredName">
                    ${product.name}
                </div>
                <div class="featuredText">
                    ${product.description}
                </div>
                <div class="featuredPrice">
                    $${product.price}
                </div>
            </div>

        </div>
    `;
}

/**
 * @param {ProductDTO[]} products 
 * @param {HTMLDivElement} featuredItemsEl 
 */
function insertProductsIntoPage(products, featuredItemsEl) {
    let productsMarkup = '';
    for (let product of products) {
        productsMarkup += getProductMarkup(product);
    }
    featuredItemsEl.insertAdjacentHTML('afterbegin', productsMarkup);
}

function addEventListenersForAddToCartButtons() {
    const addToCartBtns = document.querySelectorAll('button[data-productId]');
    addToCartBtns.forEach(function (button) {
        button.addEventListener('click', addedProductHandler);
    })
}

/**
 * @param {MouseEvent} event
 */
function addedProductHandler(event) {
    const productId = event.currentTarget.getAttribute('data-productId');
    addProductIntoBasket(productId);
}

insertProductsIntoPage(products, featuredItemsEl);
addEventListenersForAddToCartButtons();
