Giphster
---

### Overview

I started this project using [Create React App](https://github.com/facebook/create-react-app) with
the TypeScript template. The application is broken up into three main sections, components,
containers and support as detailed below. The organization follows a basic react-redux setup since it's a small codebase.

#### Components
Functions that don't gather any data from redux but rather take values passed
down via props or using hooks. These pieces make up most of the viewable content in
the app.

#### Containers
Connected components that add state from the redux store. This is mainly the list of
gifs fetched in the last request. The `App` container contains all of the logic of
when to request new images as well as the `offset` and `query`.

#### Support
This contains the interface for the API, context for the modal and the redux store. The
modal context has a manager that allows showing and hiding the modal with the selected image.

### Design Decisions
I decided to use a React Context for managing the modal state since it avoids
passing handlers and values through intermediatary components. The hook makes
it easy for functional components downstream to show, hide or view the current
item from the context as well as the modal component. This makes the
dependencies of each of the components less complicated and the component
more standalone.

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
