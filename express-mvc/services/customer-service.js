const customerModel = require('../models/customer-model');

const createCustomer = customerObj => {
  // validate customerObj
  customerModel.createCustomer(customerObj);
  // return something
};

module.exports = {
  createCustomer
};
