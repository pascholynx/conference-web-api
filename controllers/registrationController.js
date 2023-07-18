const Registration = require('../models/registrationModel');

exports.register = async (req, res) => {
    const {surname, otherNames, email, phoneNumber, areaOfInterest, location} = req.body;

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
