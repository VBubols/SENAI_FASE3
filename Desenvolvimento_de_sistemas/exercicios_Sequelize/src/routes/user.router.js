import { Router } from 'express';
import * as controller from '../controllers/user.controller.js'

const routerUser = Router();

routerUser.get('/', controller.getAllUsers);
routerUser.get('/:id', controller.getUserById);
routerUser.post('/', controller.createrUser);
routerUser.put('/:id', controller.updateUser);
routerUser.put('/:id/password', controller.updatePassword);
routerUser.delete('/:id', controller.deleteUser);

export default routerUser;