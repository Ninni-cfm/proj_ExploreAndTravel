//****************************************************************************
// required modules
const Holiday = require('../models/holidayModel')


//****************************************************************************
// controller functions for the routes

//----------------------------------------------------------------------------
// create a new holiday location
const createHoliday = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400)
            .json({
                success: false,
                error: 'You must provide a Holiday',
            });
    }

    const Holiday = new Holiday(body)

    if (!Holiday) {
        return res
            .status(400)
            .json({
                success: false,
                error: err
            });
    }

    Holiday
        .save()
        .then(() => {
            return res
                .status(201)
                .json({
                    success: true,
                    id: Holiday._id,
                    message: 'Holiday created!',
                });
        })
        .catch(error => {
            return res
                .status(400)
                .json({
                    error,
                    message: 'Holiday not created!',
                });
        });
}


//----------------------------------------------------------------------------
// update an holiday location
const updateHoliday = async (req, res) => {
    const body = req.body;

    if (!body) {
        return res
            .status(400)
            .json({
                success: false,
                error: 'You must provide a body to update',
            });
    }

    Holiday.findOne(
        { _id: req.params.id }, (err, Holiday) => {
            if (err) {
                return res
                    .status(404)
                    .json({
                        err,
                        message: 'Holiday not found!',
                    });
            }

            Holiday.location = body.location;
            Holiday.activity = body.activity;
            Holiday.image_url = body.image_url;
            Holiday.description = body.description;

            Holiday
                .save()
                .then(() => {
                    return res
                        .status(200)
                        .json({
                            success: true,
                            id: Holiday._id,
                            message: 'Holiday updated!',
                        });
                })
                .catch(error => {
                    return res.status(404).json({
                        error,
                        message: 'Holiday not updated!',
                    });
                });
        });
}


//----------------------------------------------------------------------------
// delete a holiday location
const deleteHoliday = async (req, res) => {
    await Holiday.findOneAndDelete(
        { _id: req.params.id }, (err, Holiday) => {
            if (err) {
                return res.status(400).json({ success: false, error: err })
            }

            if (!Holiday) {
                return res
                    .status(404)
                    .json({
                        success: false,
                        error: `Holiday not found`
                    });
            }

            return res
                .status(200)
                .json({
                    success: true, data: Holiday
                });
        }).catch(err => console.log(err))
}


//----------------------------------------------------------------------------
// get a holiday location by database id (holidayModel._id)
const getHolidayById = async (req, res) => {
    await Holiday.findOne(
        { _id: req.params.id }, (err, Holiday) => {
            if (err) {
                return res.status(400).json({ success: false, error: err })
            }

            if (!Holiday) {
                return res
                    .status(404)
                    .json({ success: false, error: `Holiday not found` })
            }
            return res.status(200).json({ success: true, data: Holiday })
        })
        .catch(err => console.log(err));
}


//----------------------------------------------------------------------------
// get a collection of all holiday locations
const getHolidays = async (req, res) => {
    await Holiday.find(
        {}, (err, Holidays) => {
            if (err) {
                return res.status(400).json({ success: false, error: err })
            }
            if (!Holidays.length) {
                return res
                    .status(404)
                    .json({ success: false, error: `Holiday not found` })
            }
            return res.status(200).json({ success: true, data: Holidays })
        }).catch(err => console.log(err))
}


//****************************************************************************
// export all functions
module.exports = {
    createHoliday,
    updateHoliday,
    deleteHoliday,
    getHolidays,
    getHolidayById,
}
