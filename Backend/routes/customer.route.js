const express = require("express");
const { getAllCustomers, createCustomer, getCustomerById, updateCustomer, removeCustomer } = require("../controller/customer.controller");
const router = express.Router();
const upload = require('../middlewares/uploadCloudinary');


router.get('/', getAllCustomers);
router.get('/:id',getCustomerById);

router.post('/', upload.single('image'), createCustomer);
router.put('/:id', upload.single('image'), updateCustomer);
router.delete('/:id', removeCustomer);

module.exports = router