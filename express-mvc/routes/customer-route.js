const { Router } = require('express');

const customerController = require('../controllers/customer-controller');

const customerRouter = Router();

customerRouter.get('/', customerController.getAllCustomer);
customerRouter.post('/', customerController.createCustomer);
customerRouter.patch('/:id', customerController.updateCustomer);
customerRouter.delete('/:id', customerController.deleteCustomer);

module.exports = customerRouter;
