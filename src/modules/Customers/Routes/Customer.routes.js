import { Router } from 'express';
import CreateCustomerController from '../Controllers/CreateCustomerController.js'
import ListCustomerController from '../Controllers/ListCustomerController.js'
import GetCustomerController from '../Controllers/GetCustomerController.js'
import UpdateCustomerController from '../Controllers/UpdateCustomerController.js'
import DeleteCustomerController from '../Controllers/DeleteCustomerController.js'



const customerRouter = Router();

customerRouter.get('/list', ListCustomerController.list);

customerRouter.get('/get/:code', GetCustomerController.get);

customerRouter.post('/create', CreateCustomerController.insert);
customerRouter.put('/update/:code', UpdateCustomerController.update);
customerRouter.delete('/delete/:code', DeleteCustomerController.delete);


export {customerRouter}

