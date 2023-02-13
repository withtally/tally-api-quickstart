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

the quickstart application renders two example tables: governors and proposals

the first table queries the API using auto-generated hooks that you will find in src/hooks.js

to edit or add new queries, edit or add your .graphql files in the src directory and run:

```npm run gen:types```

this will result in a new hook in the hook.js file, which you can import and use in your application

if you would prefer to make raw graphql queries without the use of codegen tooling, take a look at the second query in the Proposals component

simply pass your graphql document string and variable argument to the useGraphQL helper function to query the API

##### API reference:

For our API Docs, visit https://docs.tally.xyz/tally-api/welcome

For our graphQL API Playground, visit https://api.withtally.com/playground

remember to pass your API Key in the headers  

```{ "api-key": "your_tally_api_key" }```

and to only use the Governors and Proposals queries, all other queries and mutations are subject to changes or deprecation.


happy hacking!


