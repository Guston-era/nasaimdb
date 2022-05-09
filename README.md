## Instructions and documentation

In the project directory, without changing the .env file which was intentionally left unignored for evaluation purposes, Open your terminal at root directory(where package.json file is) and run:

### `npm install`

This should install all the dev dependencies as well as the dependencies in the package.json file. Run this script after cloning the project

### `npm start`

Secondly, run this command
It basically runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser. If it is running on another port, please adjust the browser url accordingly.

### `npm test`

Before you run this command, please ensure that you have edited the cypress.json file in the route directory and set the baseUrl property to the url your server has started. By default, it is set to http://localhost:3000 and this may change
Also ensure you have a chrome browser to simulate the tests

Sometimes you might get an error on verification.. Run npx cypress verify

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
