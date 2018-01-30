# Gaia FrontEnd
- This app uses Redux to manage its state, follows a Container-Component pattern, and utilizes redux-thunk middleware to handle async.
- Styling is handled via css modules using sass. All components have their own style sheet. Global styles & themes can be added into the base style sheets and then imported later, or included in app.scss.
- Testing is handles via Jest with Enzyme. 

## Quick start
- git clone https://github.com/taudette/gaia-frontend.git
- cd gaia-frontend
- npm install
- npm run dev-server (runs development server at at http://localhost:8080)

## Production build
- npm run build:prod
- npm start (runs app at http://localhost:8080)

## Testing
- npm test

