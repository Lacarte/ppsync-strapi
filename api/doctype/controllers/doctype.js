'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const { sanitizeEntity } = require('strapi-utils');

module.exports = {



  async find(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.doctype.search(ctx.query);
    } else {
      entities = await strapi.services.doctype.find(ctx.query);
    }

    console.log('ctx.query._q >',ctx.query._q);
    console.log('ctx >',ctx);
    console.log('entities >',entities);

    return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.doctype }));
  },




};
