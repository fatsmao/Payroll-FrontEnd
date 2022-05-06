import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Updates from './Components/Updates';
import AdminLogin from './Pages/AdminLogin';
import EmployeeLogin from './Pages/EmployeeLogin';
import Home from './Components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListEmployees from './Components/ListEmployees';

function App() {
  return (
    <Router>
     <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/admin" component={AdminLogin} />
        <Route path="/employee" component={EmployeeLogin} />
        <Route path="/updates" component={Updates} />
        <Route path="/listemployees" component={ListEmployees} />
      </Switch>
      <Footer/>
     </div>
    </Router>

  );
}

export default App;
