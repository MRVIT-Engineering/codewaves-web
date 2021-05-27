<p align="center">
<strong>Codewaves.io Client</strong><br>
</p>

## Table of contents

- [Quickstart](#quickstart)
- [Project Structure](#structure)
- [System architecture](#system-architecture)
- [Local setup](#local-setup)
- [Codestyle & Linting](#codestyle-&-linting)
- [Testing](#testing)
- [Deployment](#deployment)

## Quickstart

Make sure your environment is setup for node.js & react with typescript.  
Check https://reactjs.org/docs/getting-started.html

_Note_: The instructions use `npm` as the node packaging tool.

- Clone the repo: `git clone https://github.com/MRVIT-Engineering/codewaves-client-react.git`
- Switch into the project folder & install dependencies: `npm install`
- Create an `.env` file in the project's root directory, see [Local setup](#local-setup)
- Start the app: `npm start`
- Open http://localhost:3000 to view it in the browser

## Structure

The project itself has a `public` and a `src` directory.  
All relevant code is inside the `src` directory - `public` is merely used to provide a html skeleton into which the react application will be rendered.
The project has the following structure:

```
./.github/workflows/     (github actions for automatic deployment)
./public/                (html skeleton which loads the react app)
./src/                   (main directory for all react / js / ts sources)
 ├─ assets/              (images, icons, fonts and css modules(rare ocasions only))
 ├─ components/          (react view components)
 ├─ constants/           (static constants: colors, configs, strings, enums, etc.)
 ├─ hooks/               (react hooks for shared side-effect logic inside components)
 ├─ localization/        (localization files for translated strings inside the UI)
 ├─ models/              (classes & types for domain models)
 ├─ views/             (navigatable screens which are composed from components)
 ├─ services/            (non-ui libs & services, i.e. api , filesystem, cache, etc.)
 ├─ store/               (mobx stores for shared app state & state-manipulation)
 ├─ App.tsx              (main app, inits router, navigation & stream/show data)
 ├─ index.tsx            (main entry point, inits dependencies & starts App)
```

The other files are mostly configuration or setup files, for packaging and/or linting.

In essence, most of the time you will either be working on _components_ (for views), _stores_ / _models_ (for state / data logic) or _screens_ (for navigatable app screens composed from multiple _components_).

## System architecture

In general, the app is roughly organized into these modules:

- view components for rendering UI
- screens for navigating between different compositions of multiple view components and
- (most importantly) mobx stores for managing app-state & backend-communication.

There are some more minor modules (hooks for shared view-logic or services for wrapping often-used code), but these are the core building blocks of the app.

Most business logic happens inside the mobx stores.  
The stores manage the app state - they hold shared data structured by context into different stores.  
They also update & mutate the app state through actions (See [mobxjs.org](https://mobx.js.org/README.html) for more information on mobx state management.)  
So most of the 'heavy' business logic will be found inside the stores, as the dashboard modules should ideally be as slim as possible.

The data that is being managed inside these stores (and then consequently rendered as an UI via the view components) 
is communicated from and to the network with our [docviser-backend](https://github.com/MCROEngineering/docviser-api)

## Local setup

Once you've run the app as described in the Quickstart section above, you can start modifying code and the app should reload automatically whenever you save your changes (hot-reload is enabled by default).

During development, you should mostly be using the dev/staging environments of our backend.  
Create an `.env` file in the projects root directory to setup the api endpoints & access credentials, use this template:

```
template will be posted when env variables will be necessary

```


## Codestyle & Linting

The project adheres to the [AirBnB JavaScript Style Guide](https://github.com/airbnb/javascript/) and linting is setup with [ESLint](https://eslint.org/docs/rules/), extending the `@react-app` ruleset.  
The major differences from what you might be used to are most likely:

- Indentation: `2` Spaces instead of `4`
- Style definitions for components on top (above the component definition) in JSX/TSX files

You can run the linter via `yarn lint` inside the project folder, or setup your IDE to lint opened / edited files automatically & on-the-fly.  
The linked resources above are a great read if you are interested in the reasoning behind these linting choices, but should also be your first stop when encountering linting errors.

Try to use TypeScript wherever possible. This project still has a mixed JavaScript / TypeScript codebase for historical reasons, but new modules should be written in TypeScript whenever possible. In the future, we might migrate existing JavaScript code to TypeScript.

## Deployment

The app is deployed automatically through [Netflify](https://fervent-banach-d110db.netlify.app/).  

Note that deployments take a few minutes (S3 cache invalidation takes a minute too) and the app bundle might be cached in your browser as well - make sure to clear your cache & hard refresh if you don't see any changes after a successful deployment.

