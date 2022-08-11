import react from 'react';
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
import Login from './Components/Login';
import './App.css';
import SignUp from './Components/SignUp';
import NotFound from './Components/NotFound';




function App() {
 
  
   
  return (
    <Router>
    <div className="App">
      
    <Switch>
      <Route path="/SignUp" component={SignUp}/>
        <Route path="/Login" component={Login}/>
        <Route path="/*" component={NotFound}/>
     </Switch> 
    
    </div>
    </Router>
  );
}

export default App;
