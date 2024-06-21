# NPM Basics

"80/20 rule"

In reality for NPM it's more like the 95/5 rule. You only need to know 5% of the things NPM can do in order to do the vast majority of your work.

Start an NPM project: `npm init` or `npm init -y`

This will make `package.json` which is:

- A manifest file of dependencies
- Project settings
- Project meta-data
- A way to run scripts _with_ package.json settings

## Alternatives

- yarn
- pnpm
- bun

## Dependencies

Topics:

- Installing deps with `npm install <package>` or `npm i <package>`
- "dependencies" vs "devDependencies": `npm i -D <package>`
- Package-lock
- SEMVER: 1.2.3 (Major.Minor.Patch)
- Semver ranges: ^ (for minor) and ~ (for patch)
  - `^1.2.0` in package.json means we're eligible to be using `1.1.0` in package-lock
- Installing specific versions: `npm install package@1.0`
- Uninstalling via `npm uninstall <package>`

# Using an existing project

If you've just cloned an existing project, it will have `package.json` and `package-lock.json` already since these are committed in git. You won't have a `node_modules` folder though since we don't typically commit those to git (since they're big).

Run `npm install` without adding a package name and it will seek through all the packages listed in `package.json` and it will make your `node_modules` folder.

# Common Commands

```sh
# Docs for `npm install`
# https://docs.npmjs.com/cli/v6/commands/npm-install

# This command will install all dev and production dependencies found in
# package.json. It's typically used when you've just cloned a repo. The
# repo will come with a #package.json but not a node_modules folder, so
# this command will install all files in node_modules:
npm install

# Alias for `npm install`
npm i

# Install a specific package into node_modules. It also adds the package
# to the dependencies property of package.json:
npm i <package-name>

# Same as above but adds to devDependencies section of package.json. You
# can also use `--save-dev`
npm i <package-name> -D

# Install a package globally (outside of your project in npm's global
# folder on your machine). This is typically used when the package is
# going to add a binary for you to use in CLI.
npm i -g <package-name>

# For example
npm i -g http-server

# Now you can navigate to any path on your computer and run this command
http-server

# http-server will run the local path as a web server, using the files
# as static assets.

# List NPM modules installed in the current path's node_modules folder
npm list --depth=0

# List  NPM modules installed globally on machine
npm list -g --depth=0
```

## Scripts

Topics:

- Show the basics of scripts: Run a node file via `"start": "node index.js"`
- Show `npm run <script>` vs defaults like `npm start`
- Binaries: `npm install http-server` and show how we can't just do `$ http-server`
  but rather we have to made a script so NPM can run the correct binary in NODE_MODULES

## Installing Globally

Topics:

- `npm install -g <package>` vs `npx <package>`
- Show `http-server` for example

## Maintenance

Fixes dependencies and transitive dependencies when they need to be updated from a security standpoint. You will be notified via CLI when you need to run this

- `npm audit`: List them
- `npm audit fix`: Fix them

## package.json

- Explain `engines`
  If we `npm i` something that's not compatible with engines, we'll get a warning

```json
{
  // The name of your project (must be lowercase and one word, or hyphenated)
  "name": "my-project",

  // The type of module resolution to be used
  "type": "commonjs", // or "module"

  // The version of your project (follow semantic versioning: MAJOR.MINOR.PATCH)
  "version": "1.0.0",

  // A brief description of your project
  "description": "A brief description of my awesome project",

  // The entry point file of your project (commonly "index.js")
  "main": "index.js",

  // Keywords to help others find your project (an array of strings)
  "keywords": ["example", "project", "node"],

  // The author of the project (your name and email)
  "author": "Your Name <your.email@example.com>",

  // The license under which your project is released
  "license": "MIT",

  // Scripts to automate tasks (run with `npm run <script-name>`)
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

  // Dependencies required for your project to run
  "dependencies": {
    "express": "^4.17.1"
  },

  // Development dependencies for your project (only needed during development)
  "devDependencies": {
    "nodemon": "^2.0.12",
    "eslint": "^7.32.0"
  },

  // Peer dependencies (specify compatible versions of packages your project works with)
  "peerDependencies": {
    "react": "^17.0.2"
  },

  // Engines field to specify versions of Node.js and npm your project is compatible with
  "engines": {
    "node": ">=14.0.0",
    "npm": ">=6.0.0"
  },

  // Repository information (useful if your project is hosted on a platform like GitHub)
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/my-awesome-project.git"
  },

  // Bugs field to specify where issues and bugs should be reported
  "bugs": {
    "url": "https://github.com/yourusername/my-awesome-project/issues"
  },

  // Homepage of the project (usually a website or GitHub repository)
  "homepage": "https://github.com/yourusername/my-awesome-project#readme"
}
```
