import React from 'react'
import {  Link  } from 'react-router-dom';
import { Image, Heading, Flex } from '@chakra-ui/react';
function NotFound() {

  return (
    <div>
     
       <Image src='./Images/logo.png' alt="logo" width={'200px'} height={'200px'} top={'10px'} position={'absolute'} right={'580px'}/>
        <Flex height="100vh" alignItems={'center'} justifyContent={'center'}>
          <Flex direction={'column'} p={12} rounded={6}>
       <Heading>page not Found</Heading>
        <Image src='./Images/404error.jpg' alt=''/>
        <Link to="/Login">Back to home page</Link>
        </Flex>
       </Flex>
    </div>
  )
}

export default NotFound