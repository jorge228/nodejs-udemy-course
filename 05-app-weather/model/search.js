const axios = require('axios');

class Search {

    record = ['España', 'Córdoba', 'Cabra'];

    constructor() {
        // TODO: read record if exists
    }

    async find(word = '') {

        try {
            const res = await axios.get('https://reqres.in/api/users?page=2');
            console.log(res.data);
            return [];
        } catch (error) {
            return [];
        }

    }
}

module.exports = Search;