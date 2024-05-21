const express = require('express');

const billController = require('../controllers/bill-controller');

const router = express.Router();

router.post('/', billController.createBill);
router.patch('/:billId', billController.updateBill);
router.delete('/:billId', billController.deleteBill);
router.get('/', billController.getAllBill);
router.get('/:billId', billController.getBillById);

module.exports = router;
