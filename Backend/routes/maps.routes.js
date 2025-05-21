const express = require('express');
const router = express.Router();
const mapsController = require('../controllers/maps.controller');
const { query } = require('express-validator');

router.get('/coordinates',
    query('address').isString().isLength({ min: 3 }).withMessage('Address is required and must be at least 3 characters'),
    mapsController.getCoordinates
);

router.get('/distance-time',
    query('origin').isString().withMessage('Origin is required'),
    query('destination').isString().withMessage('Destination is required'),
    mapsController.getDistanceTime
);

router.get('/autocomplete',
    query('input').isString().isLength({ min: 1 }).withMessage('Input is required'),
    mapsController.getAutoCompleteSuggestions
);

module.exports = router;
