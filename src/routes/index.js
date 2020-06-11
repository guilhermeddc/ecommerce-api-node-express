import { Router } from 'express';
import routesApi from './api/v1';

const routes = new Router();

routes.use('/v1/api', routesApi);
routes.get('/', (req, res) => res.json({ message: 'Api running!' }));

routes.use((req, res) => {
  const err = new Error('Not Found');
  err.status = 404;
  return res
    .status(err.status || 404)
    .json({ status: err.status, message: err.message });
});

routes.use((err, req, res) => {
  res.status(err.status || 500);
  if (err.status !== 404) console.warn('Error ', err.message, new Date());

  return res.json({ errors: { status: err.status, message: err.message } });
});

routes.use((err, req, res, next) => {
  if (err.name === 'ValidationError') {
    return res.status(422).json({
      errors: Object.keys(err.errors).reduce((errors, keys) => {
        errors[key] = err.errors[key.message];
        return errors;
      }, {}),
    });
  }
});

export default routes;
