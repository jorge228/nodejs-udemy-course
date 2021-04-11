const fs = require('fs');

const createTable = async (base = 5) => {

    try {
        let text = '';

        for (let i = 0; i <= 10; i++) {
            text += `${base} x ${i} = ${base * i}\n`;
        }
        fs.writeFileSync(`tabla-${base}.txt`, text);
        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }

    // fs.writeFile(`tabla-${base}.txt`, text, (err) => {
    //     if (err) throw err;
    //     console.log('The file has been saved!');
    // });

}

module.exports = {
    // createTable: createTable
    createTable
}