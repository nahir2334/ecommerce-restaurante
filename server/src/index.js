import { router as ProductRoutes } from './products/routes/ProductRoutes';
import { router as UserRoutes } from './user/routes/UserRoutes';
import express from 'express';

const api = express()
api.use(express.json())
api.use('/api', ProductRoutes);
api.use('/api', UserRoutes);
export {api}