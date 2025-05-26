import { Router } from 'express';
import CreateCollaboratorsController from '../Controllers/CreateCollaboratorsController.js'
import ListCollaboratorsController from '../Controllers/ListCollaboratorsController.js'
import GetOneCollaboratorsController from '../Controllers/GetOneCollaboratorController.js'


const collaboratorRouter = Router();

collaboratorRouter.get('/list', ListCollaboratorsController.list);

collaboratorRouter.get('/get/:id', GetOneCollaboratorsController.get);

collaboratorRouter.post('/create', CreateCollaboratorsController.insert);

export {collaboratorRouter}

