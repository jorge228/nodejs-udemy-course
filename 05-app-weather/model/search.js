const fs = require('fs')
const axios = require('axios');

class Search {

    dbPath = './db/database.json'
    record = [];

    constructor() {
        this.readDB();
    }

    get paramsMapBox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'es'
        }
    }

    get paramsWeather() {
        return {
            appid: process.env.OPENWEATHER_KEY,
            units: 'metric',
            lang: 'es',
        }
    }

    get recordUpperCase() {
        return this.record.map(place => {
            let word = place.split(' ');
            word = word.map(w => w[0].toUpperCase() + w.substring(1));
            return word.join(' ');
        });
    }

    async find(word = '') {

        try {
            // const res = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/madrid.json?access_token=pk.eyJ1Ijoiam9yZ2UyMjgiLCJhIjoiY2tucmFxbW44MjY3YjJubnhucWFlbXZpdiJ9.HWm0FHawWz-cz3LtQGa4TA&autocomplete=true&limit=5&language=es');
            // console.log(res.data);
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${word}.json`,
                params: this.paramsMapBox
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
                params: { ...this.paramsWeather, lat, lon }
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

    addRecord(place = '') {
        if (this.record.includes(place.toLowerCase())) return;

        this.record = this.record.splice(0, 7);
        this.record.unshift(place.toLowerCase());
        this.saveDB();
    }

    saveDB() {
        const payload = {
            record: this.record
        }
        fs.writeFileSync(this.dbPath, JSON.stringify(payload));
    }

    readDB() {
        if (!fs.existsSync(this.dbPath)) return;

        const data = fs.readFileSync(this.dbPath, { encoding: 'utf-8' });

        this.record = JSON.parse(data).record;
    }
}

module.exports = Search;