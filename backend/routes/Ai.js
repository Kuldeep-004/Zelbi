import {Router} from 'express';
import * as aiController from '../controllers/Ai.js'
const router=Router();

router.post('/get-result',aiController.getResult);

export default router;