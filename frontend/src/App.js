import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Updates from './Components/Updates';
import Home from './Components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
    <Navbar/>
      <Route exact path="/" component={Home} />
      {/*  <Route path="/admin" component={AdminLogin} />
         <Route path="/employee" component={EmployeeLogin} /> */}
      <Route path="/updates" component={Updates} />
    <Footer/>
    </div>
    </Router>

  );
}

export default App;
