import { Router } from 'express';
import { collaboratorRouter } from '../src/modules/Collaborators/Routes/Collaborators.routes.js'
import { customerRouter } from '../src/modules/Customers/Routes/Customer.routes.js'


const routes = Router();

routes.use('/collaborators', collaboratorRouter);
routes.use('/customers', customerRouter);


export {routes}

