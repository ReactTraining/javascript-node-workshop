# Module Basics

- CommonJS vs ESM (EcmaScript Modules)
- "EcmaScript" === the official name of JavaScript
- Default vs Named import/exports

MDN: The official docs for HTML, CSS, and JS

https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

## package.json

```json
{
  // Default. We don't need to add
  "type": "commonjs",

  // Needed if we want to use ESM
  "type": "module"
}
```

Sometimes we don't need to designate `type: module` if we're not running Node directly but rather a bundler like Webpack is running and understands ESM
