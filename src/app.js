import express from 'express';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';
import path from 'path';
import bodyParser from 'body-parser';

import routes from './routes';
import './database';

const isProduction = process.env.NODE_ENV === 'production';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    if (!isProduction) this.server.use(morgan('dev'));

    this.server.use(express.json());
    this.server.use(compression());
    this.server.use(cors());

    this.server.use(bodyParser.json({ limit: 1.5 * 1024 * 1024 }));
    this.server.use(
      bodyParser.urlencoded({
        extended: false,
        limit: 1.5 * 1024 * 1024,
      }),
    );

    this.server.use(
      '/public',
      express.static(path.resolve(__dirname, '..', 'public')),
    );
    this.server.use(
      '/public/images',
      express.static(path.resolve(__dirname, '..', 'public', 'images')),
    );

    this.server.set('view engine', 'ejs');
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
