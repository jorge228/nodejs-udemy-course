class Search {

    record = ['España', 'Córdoba', 'Cabra'];

    constructor() {
        // TODO: read record if exists
    }

    async find(word = '') {
        // request http
        console.log({ word });
        // return places
        return [];
    }
}

module.exports = Search;