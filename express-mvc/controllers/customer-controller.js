const customerService = require('../services/customer-service');

const getAllCustomer = (req, res, next) => {
  // retrieve from database
};

const createCustomer = (req, res, next) => {
  const result = customerService.createCustomer(req.body);
  // Generate HTML Page
  // if result success then Generate success page
  // case ejs:  res.render('success-page', { title: 'Hey', message: 'Hello there!' })
  // res.status(200).json({ message: 'success created' });
  // if faile then generate error page
  // res.status(500).json({ message: 'error' });
};

const updateCustomer = (req, res, next) => {
  // query database if customer exists
  // validate client data (request body req.body)
  // UPDATE customer SET
};
const deleteCustomer = (req, res, next) => {
  // query database if customer exists
  // DELETE FROM customers
};

module.exports = {
  getAllCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer
};
