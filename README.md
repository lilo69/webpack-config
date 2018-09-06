# CyHome Web App
CyHome Web app for manager of building
##Getting Started
###Prerequisites

###Installing
```
install yarn
```
```
yarn install
```
## Running
Run node server
```
yarn start
```
Run webpack with env development
```
yarn build:dev
```
## Running the tests
### Break down into end to end tests
### And coding style tests
## Deployment
## Built With

* [React](https://reactjs.org/) - A JavaScript library for building user interfaces
* [React Router V4](https://reacttraining.com/react-router/) - React Router is a collection of navigational components that compose declaratively with your application
* [Redux](https://redux.js.org/) - Redux is a predictable state container for JavaScript apps.
* [Redux-saga](https://redux-saga.js.org/) - A library that aims to make application side effects
* [Jest](https://facebook.github.io/jest/) - Delightful JavaScript Testing
* [ESLint](https://eslint.org/) - The pluggable linting utility for JavaScript and JSX
* [Flow](https://flow.org/en/docs/) - A static type checker for javascript
* [Lodash](https://lodash.com/) - A modern JavaScript utility library delivering modularity, performance & extras
* [Webpack](https://webpack.js.org/) - Bundle everything to one file bundle.js

## Project structure

* ``actions/`` - Defined all action redux in ``index.js`` file.
* ``components/`` - Defined all component (input, button, modal...). When you want change anything in this folder, pls ask me before do it.
* ``pages/`` - Defined all mini react app (view + logic(enhance) + connect to redux). Each subfolder include page and subpage.
* ``defined/`` - Defined all constant value
* ``defined/language`` - Defined all variable of text (multi language). Any screen have text, replace text to variable, defined it to [language].json
* ``libs/`` - Defined all logic function use more than one place in project
* ``reducers/`` - Defined structure of store in redux 
* ``saga/`` - Defined all middleware listener action and process data take by api function and pass data to reducers
* ``services/`` - Defined all function connect to server
* ``index.js`` - Main file of project
* ``routes.js`` - Main url of each page (when you defined new url, you must defined same url in ``service.js``)

## Notes
###Before build new page
Code splitting 2 file
* Enhance: all function process logic of page (subpage)
* View: stateless function - UI of page (subpage)
###Flow
* [Flow basic type](https://flow.org/en/docs/types/)
* [Usage flow with react](https://flow.org/en/docs/react/) 
```
//@flow
...
type Props = {};
type State = {};

export default class App extends React.Component<Props, State> {
	render() {
		return <div>...</div>;
	}
}
```
See full coding from folder ``components/App.js``
###Redux
1. Action
[How actions could be constructed](https://github.com/redux-utilities/flux-standard-action)
```
MUST
* be a plain JavaScript object.
* have a 'type' property: .
MAY
* have an 'error' property.
* have a 'payload' property.
* have a 'meta' property.
```
2. Store
* There are a few questions to consider when deciding whether to add something to the state. If the answer to any of these questions is “yes,” the data should go into the state. If the answer to all of these questions is “no,” if you’re looking to reduce the complexity of your state, keep it out: 
    * Should this data be persisted between page refreshes? 
    * Should this data be persisted across route changes? 
    * Is this data used in multiple places in the UI?  
* A few examples of data that can be kept outside of the state are: 
    * Currently selected tab in a tab control on a page 
    * Hover visibility/invisibility on a control 
    * Lightbox being open/closed 
    * Currently displayed errors 
## Commit
If you build new feature, fix bug...
```
git checkout -b [name]/[name of feature will build or bug will fix]
Example: 
git checkout -b linhth/building
```
If you want to merge code to main branch
* Code is older than this version
```
git pull origin [main branch]
```
* If not
```
git rebase [main branch]
```
* Merge code, resolve conflict from local and push to your branch
* Access to bitbucket and create pull request to main branch

## Versioning
## Authors

* **Zero** - *JS developer at Cyfeer*

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
