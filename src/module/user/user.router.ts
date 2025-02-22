import { Router } from 'express';
import { userController } from './user.controller';
import { setDefaultAutoSelectFamily } from 'net';

const useRouter = Router();

useRouter.post('/create-user', userController.createUser);
useRouter.get('/', userController.getUser);
setDefaultAutoSelectFamilygfgfg;
hgh;
//today i got very hurt i did not any work today

export default useRouter;
