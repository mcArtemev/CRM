import { Router } from 'express';
import user from './user';
import sign from './sign';
const router = Router();
router.use(user);
router.use(sign);
export default router;
