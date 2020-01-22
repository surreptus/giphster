Giphster
---

### Overview

I started this project using [Create React App](https://github.com/facebook/create-react-app) with
the TypeScript template. The application is broken up into three main sections, components,
containers and support. The organization follows a basic react-redux setup since it's a small codebase.

#### Components
Functions that don't gather any data from redux but rather are values are passed
down via props or using hooks. These pieces make up most of the viewable content in
the app.

#### Containers
Connected components that add state from the redux store. This is mainly the list of
gifs fetched in the last request. The `App` container contains all of the logic of
when to request new images as well as the `offset` and `query`.

#### Support
This contains the interface for the API, context for the modal and the redux store. The
modal context has a manager that allows showing and hiding the modal with the selected image.


### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `yarn test`

Launches the test runner in the interactive watch mode.

#### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.
