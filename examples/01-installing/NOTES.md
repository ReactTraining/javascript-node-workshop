# Node and NPM Commands

When you install Node, it comes with NPM (Node Package Manager)

```sh
# Get the node version (or use `node --version`)
# Also use this just to check if node is installed
node -v

# Get the npm version or check to see if installed
npm -v
```

You can install node from source, but if you're able to, we recommend using NVM (see below).

By the way, Even numbers are LTS in Node. It's probably best to install the latest LTS active version. See https://nodejs.org/en/about/releases/ for more details.

## NVM (Node Version Manager)

This is an unofficial tool to help install and manage different versions of Node on one machine. From their docs:

> nvm is a version manager for node.js, designed to be installed per-user, and invoked per-shell. nvm works on any POSIX-compliant shell (sh, dash, ksh, zsh, bash), in particular on these platforms: unix, macOS, and windows WSL.

If you need help installing nvm on Windows, you'll need WSL. See our main [Readme](./README.md) and https://docs.microsoft.com/en-us/windows/nodejs/setup-on-wsl2

For how to install and use nvm: https://github.com/nvm-sh/nvm

```sh
# List out the node versions you have, and see which one is currently being used:
nvm list

# Switch to 18
nvm use 18

# Install 20
nvm install 20
```

Also explain how NVM defaults work
