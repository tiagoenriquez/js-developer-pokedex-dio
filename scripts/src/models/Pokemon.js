export default class Pokemon {
    /** @type {number} */ id;
    /** @type {string} */ name;
    /** @type {string} */ type;
    /** @type {string[]} */ types;
    /** @type {string} */ photo;
    /** @type {string} */ species;
    /** @type {number} */ height;
    /** @type {number} */ weight;
    /** @type {string[]} */ abilities;

    /**
     * 
     * @param {number} id 
     * @param {string} name 
     * @param {string[]} types 
     * @param {string} photo 
     * @param {number} height 
     * @param {number} weight 
     * @param {string[]} abilities 
     */
    constructor(id, name, types, photo, height, weight, abilities) {
        this.id = id;
        this.name = name;
        this.types = types;
        this.photo = photo;
        this.type = this.types[0];
        this.height = height;
        this.weight = weight;
        this.abilities = abilities;
    }
}