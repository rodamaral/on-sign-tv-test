# OnSign TV Front-End Programming Test

**Author**: Rodrigo Almeida do Amaral

This application displays the current temperature at a given location.
The location coordinates can be obtained using the [browser navigator API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) or by typing the name of a city, state, street or address. In this case, a request will be made to the [Google Geocoding API](https://developers.google.com/maps/documentation/geocoding/start) service.

Optionally, the user can enter her coordinates manually.

Once the coordinates are given, the user can click at `Show Temperature` to get a temperature report.
Error messages are displayed if any input was incorrect or if a network error happened.

## Requirements and Build Steps

Only a recent `node` binary with `npm` is needed to run this application. Steps:
- `npm ci` to install the dependencies;
- `npm start` to open the application at `http://localhost:3000` in development mode;
- `npm run build` to build an optimized bundle.

This app was tested in the latest versions of Firefox and Chromium.

## Libraries used
- `react`, `react-dom`: because it's the most sane & efficient way to deal with UI in the browser.
- `@material-ui`: in order to use the location icon and some helper components: Tooltip, Snackbar and LinearProgress.

# Create-React-App Notes

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
