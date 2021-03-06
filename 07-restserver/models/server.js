const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';

        // Middlewares
        this.middlewares();

        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // read and parse body
        this.app.use(express.json());

        // dir public
        this.app.use(express.static('public'));
    }

    routes() {
        // this.app.get('/api', (req, res) => {
        //     // res.send('Hello World!');
        //     res.json({
        //         msg: 'get from API'
        //     });
        // });
        this.app.use(this.usersPath, require('../routes/user.routes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Example app listening at http://localhost:${this.port}`);
        });
    }
}

module.exports = Server;