export const fetcher = ({ query, variables }) => {

  return fetch(import.meta.env.VITE_TALLY_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Api-Key": import.meta.env.VITE_TALLY_API_KEY,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })
    .then((response) => response.json())
    .then((json) => {
      if (json?.errors) {
        console.error("error when fetching");

        return null;
      }

      return json.data;
    })
    .catch((error) => {
      console.log("Error when fetching =>", error);

      return null;
    });
};
