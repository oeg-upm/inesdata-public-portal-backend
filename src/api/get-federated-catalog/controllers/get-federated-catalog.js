'use strict';

const axios = require('axios');
const tokenService = require('../../services/token-service');


module.exports = {
  getFederatedCatalog: async (ctx, next) => {
    try {
      const accessToken = await tokenService.getAccessToken();
      if (!accessToken) {
        ctx.body = { message: 'Access token not available. Please authenticate first.' };
        ctx.status = 401;
        return;
      }

      // URL for fetching the federated catalog
      const countCatalogUrl = `${process.env.CATALOG_BASE_URL}/management/pagination/count?type=federatedCatalog`;

      const countResponse = await axios.get(countCatalogUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      // URL for fetching the federated catalog
      const catalogUrl = `${process.env.CATALOG_BASE_URL}/management/federatedcatalog/request`;

      // Fetch the federated catalog using the access token
      const catalogsResponse = await axios.post(catalogUrl, ctx.request.body, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      const finalResponse = {
        catalogs: catalogsResponse.data,
        totalElements: countResponse.data
      };

      // Respond with the fetched data
      ctx.body = finalResponse;
    } catch (err) {
      console.error('Error:', err);
      ctx.body = { message: 'Error fetching federated catalog!', details: err.message };
      ctx.status = 500;
    }
  }
};
