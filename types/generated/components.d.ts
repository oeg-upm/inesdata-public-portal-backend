import type { Schema, Attribute } from '@strapi/strapi';

export interface CatalogCatalog extends Schema.Component {
  collectionName: 'components_catalog_catalogs';
  info: {
    displayName: 'Catalog';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Description: Attribute.String & Attribute.Required;
    Background: Attribute.Media;
    ButtonText: Attribute.String;
  };
}

export interface GetToKnowUsGetToKnowUs extends Schema.Component {
  collectionName: 'components_get_to_know_us_get_to_know_uses';
  info: {
    displayName: 'Get To Know us';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Description: Attribute.RichText & Attribute.Required;
    Background: Attribute.Media & Attribute.Required;
  };
}

export interface JoinJoin extends Schema.Component {
  collectionName: 'components_join_joins';
  info: {
    displayName: 'Join';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Description: Attribute.RichText & Attribute.Required;
    ButtonText: Attribute.String & Attribute.Required;
    Image: Attribute.Media & Attribute.Required;
  };
}

export interface WelcomeWelcome extends Schema.Component {
  collectionName: 'components_welcome_welcomes';
  info: {
    displayName: 'Welcome';
    icon: '';
  };
  attributes: {
    Text: Attribute.String & Attribute.Required;
    Image: Attribute.Media & Attribute.Required;
    ButtonText: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'catalog.catalog': CatalogCatalog;
      'get-to-know-us.get-to-know-us': GetToKnowUsGetToKnowUs;
      'join.join': JoinJoin;
      'welcome.welcome': WelcomeWelcome;
    }
  }
}
