import react from 'react';
import { BrowserRouter as Router, Switch, Route,  } from 'react-router-dom';
import Login from './Components/Login';
import './App.css';
import SignUp from './Components/SignUp';
import NotFound from './Components/NotFound';
import { ChakraProvider, Flex } from '@chakra-ui/react';



function App() {
 
  
   
  return (
    <ChakraProvider>
    
    <Router>
      
    <Switch>
      <Route path="/SignUp" component={SignUp}/>
        <Route path="/Login" component={Login}/>
        <Route path="/*" component={NotFound}/>
     </Switch> 
    
    </Router>
   
    </ChakraProvider>
  );
}

export default App;
