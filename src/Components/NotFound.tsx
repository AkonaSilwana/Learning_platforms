import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link,  } from 'react-router-dom';
import { ChakraProvider,Button, Image, Heading } from '@chakra-ui/react';
function NotFound() {

 const getLink = () => {
   <Link to="/Login"></Link>
 }

  return (
    <div>
       <Image boxSize='150px' src='./Images/logo.png' alt="logo" />
       <Heading>page not Found</Heading>
        <Image src='./Images/404error.jpg' alt=''/>
        <Button onClick={getLink}>Back to home page</Button>
      
    </div>
  )
}

export default NotFound