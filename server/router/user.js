import { Router } from 'express';
import { user } from '../controlers';
const routerInstance = Router();
routerInstance.post('/user', user.add);
export default routerInstance;
