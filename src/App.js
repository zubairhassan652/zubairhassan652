import './App.css';
import Layout from './components/base_template/base'
import {
  BrowserRouter as Router
} from 'react-router-dom';

function App() {
  return (
    <Router>
    <Layout></Layout>
    </Router>
  );
}

export default App;
