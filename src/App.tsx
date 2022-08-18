
import { BrowserRouter as Router, Switch, Route,  } from 'react-router-dom';
import Login from './Components/Login';
import './App.css';
import SignUp from './Components/SignUp';
import NotFound from './Components/NotFound';
import { ChakraProvider } from '@chakra-ui/react';




function App() {
  
   
  return (
    <ChakraProvider>
   
    <Router>
      
    <Switch>
      <Route path="/SignUp" exact component={SignUp}/>
        <Route path="/" exact component={Login}/>
        <Route component={NotFound}/>
     </Switch> 
    
    </Router>
    
    </ChakraProvider>
  );
}

export default App;
