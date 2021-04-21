const axios = require('axios');

class Search {

    record = ['España', 'Córdoba', 'Cabra'];

    constructor() {
        // TODO: read record if exists
    }

    getParamsMapBox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'es'
        }
    }
    getParamsWeather() {
        return {
            appid: process.env.OPENWEATHER_KEY,
            units: 'metric',
            lang: 'es',
        }
    }

    async find(word = '') {


        try {
            // const res = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/madrid.json?access_token=pk.eyJ1Ijoiam9yZ2UyMjgiLCJhIjoiY2tucmFxbW44MjY3YjJubnhucWFlbXZpdiJ9.HWm0FHawWz-cz3LtQGa4TA&autocomplete=true&limit=5&language=es');
            // console.log(res.data);
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${word}.json`,
                params: this.getParamsMapBox()
            });
            const resp = await instance.get();
            // console.log(resp.data.features);
            return resp.data.features.map(place => ({
                id: place.id,
                name: place.place_name,
                lng: place.center[0],
                lat: place.center[1]
            }));
        } catch (error) {
            console.log('error'.red);
        }

    }

    async wheatherPlaceSelect(lat, lon) {

        try {

            const instance = axios.create({
                // api.openweathermap.org/data/2.5/weather?lat=37.47182&lon=-4.43356&appid=aca6c71b14c6bbd2a73080f697c79ff2&units=metric&lang=es
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: { ...this.getParamsWeather(), lat, lon }
            });

            const resp = await instance.get();
            const { weather, main } = resp.data;

            return {
                temperature: main.temp,
                min: main.temp_min,
                max: main.temp_max,
                desc: weather[0].description
            }

        } catch (error) {
            console.log('error'.red);
        }

    }
}

module.exports = Search;