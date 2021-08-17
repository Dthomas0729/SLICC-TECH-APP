import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import SideNav from './components/SideNav/index'


function App() {
  return (
    <div>
      <Router>
        <SideNav />
      </Router>

    </div>
  );
}

export default App;
