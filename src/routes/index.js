import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Api running!' }));

export default routes;
