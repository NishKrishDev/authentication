import express from 'express';
import { checkServer, login } from '../controller/controller.js';

const router = express.Router();

router.get('/', checkServer);
router.post('/login', login)

export default router;
