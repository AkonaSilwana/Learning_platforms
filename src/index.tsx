import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, Flex, Heading,Input, Image  } from '@chakra-ui/react';





const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
   
    <ChakraProvider>
      
   <Flex height="100vh" alignItems="center" justifyContent ="center">
    <Flex direction="column" background="white" p={12} rounded={6}>
      
     <App />
   
     </Flex>
 </Flex>
    </ChakraProvider>
    
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
