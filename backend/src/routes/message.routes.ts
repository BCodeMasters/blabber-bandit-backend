import { Router } from 'express';
import * as MessageController from '../controllers/message.controller';

export const router = Router();

router.post('/', MessageController.postMessage);

router.get('/', MessageController.getMessages);

module.exports = router;
