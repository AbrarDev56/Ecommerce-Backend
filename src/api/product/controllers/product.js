'use strict';

/**
 * product controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product.product', ({ strapi }) => ({
    
    async review(ctx) {
        const entry = await strapi.entityService.create('api::review.review', {
            populate: '*',
            data: {
                review: ctx.request.body.data.review,
                author: ctx.state.user.id,
                product: ctx.params.id
              },
          });
        const sanitizedEntity = await this.sanitizeOutput(entry, ctx);
        return this.transformResponse(sanitizedEntity);
    }
}));
