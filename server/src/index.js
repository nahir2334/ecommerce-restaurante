import { router as UserRoutes } from './user/routes/UserRoutes.js';
import { router as ProductRoutes } from './products/routes/ProductRoutes.js';
import { router as CategoriaRoutes } from './categoria/routes/CategoriaRoutes.js';
import express from 'express';

const api = express()
api.use(express.json())
api.use('/api', UserRoutes);
api.use('/api', ProductRoutes);
api.use('/api', CategoriaRoutes);
export {api}