const Registration = require('../models/registrationModel');

exports.register = async (req, res) => {
    const {surname, otherNames, email, phoneNumber, areaOfInterest, location} = req.body;

    if (!location || !location.type || !location.coordinates) {
        return res.status(400).json({
            message: 'Error: Location data is missing or incomplete.'
        });
    }

    try {
        const registration = new Registration({surname, otherNames, email, phoneNumber, areaOfInterest, location});
        await registration.save();

        res.status(201).json({
            message: 'Registered successfully',
            data: registration
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error occurred during registration',
            error: error.message
        });
    }
};
