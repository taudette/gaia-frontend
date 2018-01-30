# React BoilerPlate
Basic react boilerplate inspired by [this tutorial](https://www.udemy.com/react-2nd-edition/learn/v4/overview ) & tweaked to my personal preferences. 

- This app uses Redux to manage its state, follows a Container-Component pattern, and utilizes redux-thunk middleware to handle async.
- Styling is handled via css modules using sass. All components have their own style sheet. Global styles & themes can be added into the base style sheets and then imported later, or included in app.scss.
- Testing is handles via Jest with Enzyme. 

## Quick start
- git clone https://github.com/taudette/boiler.git
- cd boiler
- npm install
- npm run dev-server (runs development server at at http://localhost:8080)

## Production build
- npm run build:prod
- npm start (runs app at http://localhost:8080)

## Testing
- npm test

