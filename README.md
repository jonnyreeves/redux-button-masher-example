# redux-button-masher-example

> Supporting code for my blog post on TDD'ing Redux Middleware

To run the tests, clone the project and run `npm install`; once the dependencies have been resolved run `npm test`.

## Dev Tools
Below is a quick explanation of each dev-dependency and why it was chosen:

* babel-plugin-transform-object-rest-spread - Permits the use of the object-spread operator (`{ ...foo }`)
* babel-preset-es2015 - Configures babel to transform ES6 -> ES5.
* babel-preset-react - Configures babel to transform JSX

* browserify & babelify - Transform ES6 modules into ES5 code for use in the browser, also see webpack.
* eslint - Statical analysis for bugs, error prone pattern and stylistic nits.
* eslint-plugin-import - Detect problems with `import` statements
* replace - Platform agnostic tool for find and replace in files