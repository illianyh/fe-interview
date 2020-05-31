## Cleo Frontend Interview - Bills

## Demo link
- [Demo here!](https://bills-demo-2020.web.app/)
Note that the hosted app is not using a database, but just a JS object to store the data since you would need to connect it to a backend or database server to manage that properly. If run locally though you can operate it properly through the json-server API

### Recommendations for the app (if I had more time and working as part of Cleo team 🤓)
- Making the app fully responsive and mobile friendly in all orientations
- Adding ability to choose how many items display per page
- Adding dark mode theme
- Allowing the user to create a new bill or receipt, edit exiting ones, add transactions, etc.
- Add more comprehensive testing as the app grows
- Integrating GraphQL through the Apollo client for interfacing with the API
- Incorporating better styling throughout and greater consistency with the branding of Cleo
- Extending the app with user profiles and authentication
- Connecting the front end of the app to available, open APIs for random data (https://randomuser.me)

### API
Please note that in the ./api/api.ts file, there are two two halves - the first half can be used if the site is being hosted locally and json-server is being used to serve the data, the other is used for simple demo hosting purposes so that it does not need to be connected to a backend or hosted database.

### Get Started
1. Fork or clone this repo (a simple [`create-react-app`](https://github.com/facebook/create-react-app) extended with [`json-server`](https://github.com/typicode/json-server) and some Cleo-specific goodies)
1. Install dependencies via `yarn` (or `npm`)
1. Run `yarn start` to start the dev server
1. Run `yarn api` in a different terminal to start the json-api server

### The Task
1. Create a Tabs component that allows multiple pages to be switched between.
1. One tab should show a list of bills. These can be found at http://localhost:3002/bills/. Bills have a flag `isBill` set to `true`.
1. Another tab should show a list of transactions which are potential bills. These can also be found at http://localhost:3000/bills/. Potential bills have a flag `isBill` set to `false`.
1. Under each bill row for both lists, should be a hidden list of transactions for that bill. This should show when the bill row is clicked.
1. Under the name of each bill should show a count of the transactions for it
1. Add an action to the bills tab for each bill called "remove bill" which updates the relevant bill's `isBill` flag to `false`. You can use a `PATCH` request to `http://localhost:3000/bills/:id` using the id of the bill to update the bill resource.
1. Add an action to the potential bills tab for each potential bill called "Add as bill" which updates the relevant bill's `isBill` flag to `true`.
1. After each action, the lists should reflect the changes.

### Notes
- Please aim to spend 2-3 hours completing this task
- We'd like to see state management tools being used
- Tools we use at Cleo include styled-components, Typescript and Redux (with Sagas)
- Style the components however you see fit. SASS or PostCSS are fine, but we'd prefer CSS in JS
- We love tests, linted code and great looking UIs
- The API contains other data, feel free to use this creatively if you have the time
- Remember to check your project runs before submitting
