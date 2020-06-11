import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Api v1 running!' }));

export default routes;
