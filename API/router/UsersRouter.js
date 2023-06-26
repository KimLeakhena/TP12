import { Router } from "express";

import{
    create_users
} from '../controller/UsersController.js'
const UsersRouter=Router()

UsersRouter.post('/create_users', create_users )


export default UsersRouter