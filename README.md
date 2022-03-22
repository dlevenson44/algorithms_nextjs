## NextJS Boilerplate

This is a boilerplate NextJS project that has prettier and linting config setup to my preferences.  It also has the needed packages for unit and end to end testing using RTL/Jest and Cypress, respectfully.  We also have MUI setup for styling, and lodash is included as well.

This project is intended to act as a base for all future projects.  After all, who wants to setup linters, prettier, tests, and MUI over and over?

Theme is defined in `~/styles/theme.ts`, but no definitions have been provided.

Please run `yarn install` to install needed dependencies.  below are a list of support commands:

```bash
yarn build (build app)
yarn dev (dev mode)
yarn start (prod mode)

yarn lint (runs linter)
yarn test (runs unit tests)
yarn cypress (runs e2e tests)
```
