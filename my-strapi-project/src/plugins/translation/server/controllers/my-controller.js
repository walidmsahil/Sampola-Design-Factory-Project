'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('translation')
      .service('myService')
      .getWelcomeMessage();
  },
});
