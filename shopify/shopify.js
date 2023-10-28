// shopify.js

import { GraphQLClient } from "graphql-request";

const graphQLClient = new GraphQLClient(
  `${process.env["STORE-DOMAIN"]}/api/2023-10/graphql.json`,
  {
    headers: {
      "X-Shopify-Storefront-Access-Token":
        process.env["X-Shopify-Storefront-Access-Token"],
    },
  }
);

// Create a GraphQL query to retrieve products
export async function fetchShopifyData(query) {
  try {
    const data = await graphQLClient.request(query);
    return data;
  } catch (error) {
    console.error("Error fetching Shopify data:", error);
    throw error;
  }
}

export default graphQLClient;
