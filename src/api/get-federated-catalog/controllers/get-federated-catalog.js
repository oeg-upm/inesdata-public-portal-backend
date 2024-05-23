'use strict';

/**
 * A set of functions called "actions" for `get-federated-catalog`
 */

module.exports = {
  getFederatedCatalog: async (ctx, next) => {
    try {
      const params = new URLSearchParams();
      params.append('grant_type', 'password');
      params.append('client_id', 'dataspace-users');
      params.append('username', 'user-c1');
      params.append('password', 'user-c1');

      // external API
      // const url = `${FEDERATED_CATALOG_URL}`;
      const url = 'http://localhost:8080/realms/dataspace/protocol/openid-connect/token'

      // fetch data from external API
      const { data } = await axios.post(url, params);
      console.log(data);
      ctx.body = data;

      return ctx.body;
    } catch (err) {
      ctx.body = err;
    }
  }
};
