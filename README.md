# redux-button-masher-example

> Supporting code for my blog post on TDD'ing Redux Middleware

To run the tests, clone the project and run `npm install`; once the dependencies have been resolved run `npm test`.  You can run the app in a browser and click the buttons via `npm start`.

## Project Structure
Tests can be found next to their implementation counterpart with the classic mocha extension `.spec.js` - this makes it easier to find the tests and spot naming inconsistencies when refactoring.

JSX is intermingled javascript in `.js` files; Babel takes care of transpiling automatically so I see little benefit from using the `.jsx` file extension.

## Dev Tools
Below is a quick explanation of each dev-dependency and why it was chosen:

* babel-plugin-transform-object-rest-spread - Permits the use of the object-spread operator (`{ ...foo }`)
* babel-preset-es2015 - Configures babel to transform ES6 -> ES5.
* babel-preset-react - Configures babel to transform JSX
* browserify & babelify - Transform ES6 modules into ES5 code for use in the browser, also see webpack.
* chai - Defacto assertion library for use with mocha
* eslint - Statical analysis for bugs, error prone patterns and stylistic nits.
* eslint-plugin-import - Detect problems with `import` statements.
* esling-plugin-react - Detect problems with React and enforce style.
* mocha - Test framework for NodeJS and the browser
* mocha-phantomjs - Run mocha tests in PhantomJS from the command line.
* react-addons-test-utils - Helpers for unit-testing React components, also see enzyme
* sinon - Test spies (function which record invocation)

I have chosen to run the tests through `mocha-phantomjs` to provide a seamless browser-debugging workflow (simply open `test-runner.html` in your browser after `npm test` completes).
