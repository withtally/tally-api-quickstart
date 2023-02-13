
const config = {
    schema: [
      {
        // we force it to staging as that's how the team prefers as a development strategy
        "https://api.tally.xyz/query": {
          headers: {
            "Api-Key":  "a0a4cd00bb6953720c9c201c010cdd36a563e65c97e926a36a8acdfcd1d1eeb7",
          },
        },
      },
    ],
    documents: ["src/*.graphql"],
    generates: {
      "autogen/schema.ts": {
        config: {
          skipTypename: true,
          errorType: "Error",
          scalars: {
            Long: "number",
            Bytes: "string",
            BigInt: "string",
            Address: "string",
            ChainID: "string",
            Bytes32: "string",
            Timestamp: "string",
            AssetID: "string",
            AccountID: "string",
          },
          fetcher: {
            func: "../autogen/useGraphQLCodegen#useGraphQLCodegen",
            isReactHook: true,
          },
        },
        plugins: [
          "typescript",
          "typescript-operations",
          "typescript-react-query",
        ],
      },
    },
  }
  
  // eslint-disable-next-line no-undef
  module.exports = config