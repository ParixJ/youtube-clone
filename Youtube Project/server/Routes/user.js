import express from 'express'
import {login} from '../controllers/auth.js'
import { updateChannelData ,getAllChannels } from '../controllers/chanel.js';

const Routes = express.Router();

Routes.post('/login',login)
Routes.patch('/update/:id',updateChannelData)
Routes.get('/getAllChannels',getAllChannels)

export default Routes