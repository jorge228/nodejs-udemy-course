const fs = require('fs');

const url = './db/data.json';

const saveData = (data) => {

    fs.writeFileSync(url, JSON.stringify(data));

}

const readData = () => {
    
    if (!fs.existsSync(url)) return null;

    const data = fs.readFileSync(url, {encoding: 'utf-8'});
    
    return JSON.parse(data);
    
}

module.exports = {
    saveData,
    readData
}