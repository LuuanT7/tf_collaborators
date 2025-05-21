import { Router } from 'express';
import CollaboratorsController from '../Controllers/CollaboratorsController.js'



const collaboratorRouter = Router();

collaboratorRouter.get('/list', CollaboratorsController.list);

collaboratorRouter.get('/get/:id', CollaboratorsController.get);

collaboratorRouter.post('/create', CollaboratorsController.insert);

export {collaboratorRouter}

