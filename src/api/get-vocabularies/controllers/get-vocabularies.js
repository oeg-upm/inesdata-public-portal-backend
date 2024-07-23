'use strict';

const axios = require('axios');
const tokenService = require('../../services/token-service');


module.exports = {
  getVocabularies: async (ctx, next) => {
    try {
      const accessToken = await tokenService.getAccessToken();
      if (!accessToken) {
        ctx.body = { message: 'Access token not available. Please authenticate first.' };
        ctx.status = 401;
        return;
      }


      // URL for fetching the vocabularies
      const catalogUrl = `${process.env.VOCABULARIES_BASE_URL}/shared/request`;

      // Fetch the vocabularies using the access token
      const vocabulariesResponse = await axios.post(catalogUrl, {}, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      // Respond with the fetched data
      ctx.body = vocabulariesResponse;
    } catch (err) {
      console.error('Error:', err);
      ctx.body = { message: 'Error fetching vocabularies!', details: err.message };
      ctx.status = 500;
    }
  }
};
