import express from 'express';
import { checkServer } from '../controller/controller.js';

const router = express.Router();

router.get('/', checkServer);

export default router;
