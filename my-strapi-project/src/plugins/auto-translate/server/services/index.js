'use strict';

const myService = require('./my-service');
const translationService = require('./translationService');  // Import your new translation service

module.exports = {
  myService,
  translationService,  // Register the translation service
};
