import { Router } from 'express';
import * as controller from '../controllers/user.controller.js'

const routerUser = Router();

routerUser.get('/', controller.getAllUsers);

export default routerUser;