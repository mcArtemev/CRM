import { Router } from 'express';
import { user } from '../controlers';
const routerInstance = Router();
routerInstance.put('/user', user.add);
routerInstance.post('/user', user.editProfile);
routerInstance.get('/whoami', user.whoAmI);
export default routerInstance;
