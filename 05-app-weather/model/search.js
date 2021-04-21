const axios = require('axios');

class Search {

    record = ['España', 'Córdoba', 'Cabra'];

    constructor() {
        // TODO: read record if exists
    }

    getParams() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'es'
        }
    }

    async find(word = '') {


        try {
            // const res = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/madrid.json?access_token=pk.eyJ1Ijoiam9yZ2UyMjgiLCJhIjoiY2tucmFxbW44MjY3YjJubnhucWFlbXZpdiJ9.HWm0FHawWz-cz3LtQGa4TA&autocomplete=true&limit=5&language=es');
            // console.log(res.data);
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${word}.json`,
                params: this.getParams()
            });
            const resp = await instance.get();
            console.log(resp.data);
            return [];
        } catch (error) {
            return [];
        }

    }
}

module.exports = Search;