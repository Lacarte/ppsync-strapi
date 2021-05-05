'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {

  testcount: async (ctx,next) => {
    //const count = await strapi.services['request-status'].count(ctx.query);
    //return { count, foo: 'bar' };

    console.log("asdadasdasd")
    await next();
  },

};
