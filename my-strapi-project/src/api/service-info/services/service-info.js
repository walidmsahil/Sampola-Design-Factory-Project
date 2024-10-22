'use strict';

/**
 * service-info service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::service-info.service-info');
