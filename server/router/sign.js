import { Router } from 'express';
import { sign } from '../controlers';
const routerInstance = Router();
routerInstance.post('/sign-in', sign.SignIn);
routerInstance.delete('/sign-out', sign.SignOut);
export default routerInstance;
