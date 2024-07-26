import './App.css';
import Nav from './components/Nav'; // Corrected import statement
import Donation from './components/Donation'; 
import Impacts from './components/Impacts';
import Landing from './components/Landing';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path='/donation' element={<Donation />} />
          <Route path='/Impacts' element={<Impacts />} />
          <Route path='/landing' element={<Landing />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
