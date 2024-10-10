export default class Pagination {
    /** @type {number} */ offset;
    /** @type {number} */ limit;
    /** @type {number} @private */ max;

    /**
     * 
     * @param {number} offset 
     * @param {number} limit 
     */
    constructor(offset, limit) {
        this.offset = offset;
        this.limit = limit;
        this.max = 151;
        this.truncateLimit();
    }

    increaseLimite = () => {
        this.limit += 8;
        this.truncateLimit();
    }

    /**
     * @private
     */
    truncateLimit() {
        if (this.offset + this.limit > this.max) {
            this.limit = this.max - this.offset;
        }
    }
}