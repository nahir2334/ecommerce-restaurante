import { UserController } from "../controllers/UserController";
import express from 'express';
const router = express.Router();

router.post('/login', UserController.login);
router.post('/register', UserController.register);

export {router}