import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import {BrowserRouter} from 'react-router-dom';
import {FavoriteContextProvider} from './store/favorite-content.jsx';
/*ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)*/

/*ReactDOM.render(
  <FavoriteContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </FavoriteContextProvider>,
  document.getElementById('root')
);*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FavoriteContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </FavoriteContextProvider>
);