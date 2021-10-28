//****************************************************************************
// required modules
const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/holidayControllers');


//****************************************************************************
// the routes
router.post('/holiday', ctrl.createHoliday)
router.put('/holiday/:id', ctrl.updateHoliday)
router.delete('/holiday/:id', ctrl.deleteHoliday)
router.get('/holiday/:id', ctrl.getHolidayById)
router.get('/holidays', ctrl.getHolidays)

module.exports = router

//****************************************************************************
// export the router
module.exports = router;