# Portfolio-Stacker

## How to run in development

1. cd into `server` and run `yarn` to install deps.
2. cd into `web` and run `yarn` to install deps.
3. cd into `server` and run `yarn dev`.
4. cd into `web` and run `yarn dev`.

It's important to run the server folder first in-order to get localhost urls setup correctly. The server should run on localhost:3000 and the nextjs server should run on localhost:3001


## Overview
This is a simple application with a React/NextJS front-end & Express/GraphQL/KeystoneJS backend.

Application Stack:

- Postgres
- React (NextJS)
- NodeJS
- KeystoneJS (Express & ApolloServer)

Here's everything this application will include:

- User Login and Registration
- CRUD Operations
- Permissions
- File Upload

Here's the problem this application solves:

- Developers want to quickly share their portfolio without setting up a website. This could be used as a simple portfolio page generator.

## Backend Overhaul
I'm recreating the backend using Keystone 6 because it's more of a batteries included backend. The GraphQL queries and mutations are generated along with the schema all at once. This saves massive amounts of time/money when creating a graphql api.

## FrontEnd Overhaul 
I decided to recreate the user interface with Mantine. It gives me all the benefits of TailWindCss with more built-in customizable components. Mantine is customizable which allows me complete freedom with the design system.
