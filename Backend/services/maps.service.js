const axios = require('axios');
const captainModel = require('../models/captain.model');

// OSM API URLs from environment variables
const NOMINATIM_API_URL = process.env.NOMINATIM_API_URL;
const OSRM_API_URL = process.env.OSRM_API_URL;

// Get coordinates for a given address (OSM Nominatim)
module.exports.getAddressCoordinate = async (address) => {
  if (!address) {
    throw new Error('Address is required');
  }
  try {
    const response = await axios.get(NOMINATIM_API_URL, {
      params: {
        q: address,
        format: 'json',
        addressdetails: 1,
        limit: 1,
        countrycodes: 'us', // optional, change if needed
      },
      headers: {
        'User-Agent': 'YourAppName/1.0 (your.email@example.com)'  // <-- REQUIRED by Nominatim
      }
    });

    if (!response.data || response.data.length === 0) {
      throw new Error('Coordinates not found');
    }

    const { lat, lon } = response.data[0];
    return { lat: parseFloat(lat), lng: parseFloat(lon) };
  } catch (error) {
    console.error('Error fetching coordinates:', error);
    throw new Error('Unable to fetch coordinates');
  }
};

// Get distance and time between origin and destination (OSRM)
// origin and destination should be strings "lng,lat"
module.exports.getDistanceTime = async (origin, destination) => {
  if (!origin || !destination) {
    throw new Error('Origin and destination are required');
  }

  try {
    // OSRM expects coordinates in lng,lat format separated by semicolon
    const response = await axios.get(`${OSRM_API_URL}/route/v1/driving/${origin};${destination}`, {
      params: {
        overview: 'false',
        steps: false,
        annotations: false,
      },
    });

    if (response.data.routes && response.data.routes.length > 0) {
      const route = response.data.routes[0];
      const { duration, distance } = route; // duration in seconds, distance in meters
      return { duration, distance };
    }

    throw new Error('Route not found');
  } catch (error) {
    console.error('Error calculating distance/time:', error.response?.data || error.message);
    throw new Error('Unable to calculate distance and time');
  }
};

// Get address suggestions (Nominatim autocomplete)
module.exports.getAutoCompleteSuggestions = async (input) => {
  if (!input) {
    throw new Error('Input query is required');
  }

  try {
    const response = await axios.get(NOMINATIM_API_URL, {
      params: {
        q: input,
        format: 'json',
        addressdetails: 1,
        limit: 5,
      },
      headers: {
        'User-Agent': 'YourAppName/1.0 (your.email@example.com)'  // <-- REQUIRED by Nominatim
      }
    });

    if (!response.data || response.data.length === 0) {
      throw new Error('No suggestions found');
    }

    const suggestions = response.data.map((item) => item.display_name);
    return suggestions;
  } catch (error) {
    console.error('Error fetching suggestions:', error);
    throw new Error('Unable to fetch suggestions');
  }
};

// Get captains within radius (radius in km)
module.exports.getCaptainsInTheRadius = async (lat, lng, radius) => {
  if (typeof lat !== 'number' || typeof lng !== 'number' || typeof radius !== 'number') {
    throw new Error('Latitude, longitude and radius must be numbers');
  }

  try {
    // MongoDB GeoJSON requires [lng, lat]
    const captains = await captainModel.find({
      location: {
        $geoWithin: {
          $centerSphere: [[lng, lat], radius / 6371], // radius in radians (Earth radius in km)
        },
      },
    });

    return captains;
  } catch (error) {
    console.error('Error fetching captains in radius:', error);
    throw new Error('Unable to fetch captains');
  }
};
