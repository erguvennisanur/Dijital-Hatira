import ReactDOM from 'react-dom' // Note: No need to specify 'client' here
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
)
