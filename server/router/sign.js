import { Router } from 'express';
import { sign } from '../controlers';
const routerInstance = Router();
routerInstance.post('/sign-in', sign.SignIn);
routerInstance.delete('/sign-out', sign.SignOut); // это ручки или endpointы
export default routerInstance;
