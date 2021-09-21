import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import SideNav from './components/SideNav/index'


function App() {
  return (
    <div>
      <Router>
        <SideNav />
        {/* <Navbar /> */}
      </Router>

    </div>
  );
}

export default App;
