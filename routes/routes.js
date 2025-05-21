import { Router } from 'express';
import { collaboratorRouter } from '../src/collaborators/routes/Collaborators.routes.js';


const routes = Router();

routes.use('/collaborators', collaboratorRouter);

export {routes}

