import { createRoot } from 'react-dom/client'
import Store from './store/Store.js'
import { Provider } from 'react-redux'
import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import'../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <App />
  </Provider>,
)
