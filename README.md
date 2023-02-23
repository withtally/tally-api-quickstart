# tally-api-quickstart
A cloneable repository for getting started with the new Tally API.

##### To clone the repository: 

```git clone https://github.com/withtally/tally-api-quickstart.git```

##### To set env variables:

copy the .env.template file into a .env file at the root of your directory

create a Tally account at https://tally.xyz and when signed in, generate your API Key at https://www.tally.xyz/user/settings

add your API KEY as VITE_TALLY_API_KEY={ your_tally_api_key }

##### To run the application: 

```npm install``` 

```npm run dev```

##### Querying the Tally API:

the quickstart application renders three example tables: governors, proposals and polygon proposals

the first table queries the API using auto-generated hooks that you will find in src/hooks.js

to edit or add new queries, edit or add your .graphql files in the src directory and run:

```npm run gen```

this will result in a new hook in the hook.js file, which you can import and use in your application

if you would prefer to make raw graphql queries without the use of codegen tooling, take a look at the second query in the Proposals component

simply pass your graphql document string and variable arguments to the fetcher helper function to query the API

finally, the third table uses a helpful hook that we've created for you: useQuery. This hook uses React Query to supply states like isLoading, error, etc 

##### Making your first GraphQL query

for those of you who aren't familiar with using GraphQL, have no fear! 

making a GraphQL query with our fetcher method is as simple as defining your GraphQL query "document", and passing arguments. 

as you can see in src/Proposals.jsx, the GraphQL document is simply a string that defines which API query you are calling and which fields you'd like to fetch 

for more information on GraphQL querying checkout https://graphql.org/learn/queries/

when you've defined your document string pass it to the fetcher like so: 

```fetcher({ query: queryDocument })```

when passing arguments, reference the Tally API playground or docs see which arguments are required for your query

you can then pass them to the fetcher as variables: 

```
fetcher({
      query: proposalQueryDocument,
      variables: {
        id: proposalId,
       })
```

once you've passed your query and variables, fetcher will return your data as a promise

here's an example of handling the response in a ```.then()``` and setting it to some local state

```
fetcher({ ... }).then((data) => {
      const { proposals } = data ?? [];
      setProposals(proposals);
    });
```    


##### API reference:

For our API Docs, visit https://docs.tally.xyz/tally-api/welcome

For our graphQL API Playground, visit https://api.withtally.com/playground

remember to pass your API Key in the headers  

```{ "api-key": "your_tally_api_key" }```

and to only use the Governors and Proposals queries, all other queries and mutations are subject to changes or deprecation.


happy hacking!


