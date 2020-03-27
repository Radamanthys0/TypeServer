import express from 'express';
import morgan from 'morgan'
import bodyParser from 'body-parser'

class App {
    public app: express.Application;
    private morgan: morgan.Morgan;
    private bodyParser;


    constructor() {
        this.app = express();

        this.middleware();
        this.routes();
    }

    middleware() {
        this.app.use(morgan('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }
    routes() {
        this.app.route('/').get((req, res) => res.status(200).json({ 'message': 'Hello World' }));
    }
}

export default new App();