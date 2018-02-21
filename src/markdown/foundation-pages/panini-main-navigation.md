# Generating the Main Nav from Data

The main navigation on this site is built from yaml data using panini.

The basic idea comes from these sources:

See this [Tutorial](https://zurb.com/university/lessons/advanced-panini-tips-and-tricks)

and this [Video](https://www.youtube.com/watch?v=aozyoRwX-Lo)

Sub-menus are generated using panini helpers like `{{#each}}` and `{{#if}}`.  But in addition to these another helper is used from [helpers/handlebars-helpers](https://github.com/helpers/handlebars-helpers).

Install the package

```bash
yarn add helpers/handlebars-helpers
```

Make the helpers available to Gulp during the build process

@ gulpfile.babel.js

```javascript
var handlebars = require('handlebars');
var helpers = require('handlebars-helpers')({
  handlebars: handlebars
});
```

Now the helpers are available to use in templates such as this site's main menu template







