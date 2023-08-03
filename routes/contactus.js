const express = require('express');

const controllers= require('../controllers/contactus');

const router = express.Router();

router.get('/contactus',controllers.contactusController);
router.get('/success',controllers.successController);


module.exports= router;

