import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk';
// import movies from './reducers.js';
import rootReducer from './reducers.js';

//function logger(obj,next,action)
//logger(obj)(next)(action)
// const logger = function({dispatch,getState }){
//     return function(next){
//          return function(action){
//           //middleware code
//             console.log('ACTION_TYPE =', action.type);
//             next(action);
//           }
//     }
// }



const logger = ({dispatch,getState }) => (next) => (action) =>{
          //middleware code
            console.log('ACTION_TYPE =', action.type);
            next(action);
}


const store = createStore(rootReducer,applyMiddleware(logger,thunk));
console.log('store', store);

// console.log('AFTER STATE',store.getState());

export const StoreContext = createContext();
console.log('StoreConext',StoreContext);

class Provider extends React.Component{
    render (){
      const {store} = this.props;
      return <StoreContext.Provider value={store}>
        {this.props.children}
      </StoreContext.Provider>
    }
}


// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'Superman'}]
// })
//console.log('BEFORE STATE',store.getState());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App  />
    </Provider>
  </React.StrictMode>
);

