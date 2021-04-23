const http = require('http');

http.createServer((req, res) => {

    // EXAMPLE 1
    // res.writeHead(200, { 'Content-Type': 'application/json' });   
    // const person = {
    //     name: 'Jorge',
    //     age: 35
    // }
    // res.write(JSON.stringify(person));

    // EXAMPLE 2
    // res.setHeader('Content-Disposition', 'attachment; filename=list.csv');
    // res.writeHead(200, { 'Content-Type': 'application/csv' });
    // res.write('1, nombre1\n');
    // res.write('2, nombre2\n');
    // res.write('3, nombre3\n');
    // res.write('4, nombre4\n');

    res.end();

}).listen(8080);

console.log('Escuchando el puerto:', 8080);