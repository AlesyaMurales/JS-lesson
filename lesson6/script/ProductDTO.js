/**
 * @see https://ru.wikipedia.org/wiki/DTO
 */
class ProductDTO {
    /**
     * @param {number} id 
     * @param {string} image 
     * @param {string} name 
     * @param {string} description 
     * @param {number} price 
     */
    constructor(id, image, name, description, price) {
        this.id = id;
        this.image = image;
        this.name = name;
        this.description = description;
        this.price = price;
    }
}