import React from 'react'
 import { Link  } from 'react-router-dom';
import { Image, Heading,Box, Flex, Button, useMediaQuery, Center } from '@chakra-ui/react';


function NotFound() {
  const [isResponsive] = useMediaQuery('(max-width: 400px)')


  return (

    <div  >
       <Box textAlign={'center'} height={'100%'} width={'100%'}  >
       <Center alignItems={'center'} >
       <Image src='./Images/logo.png' alt="logo" width={isResponsive ? '228px':'465px'} height={isResponsive ? '54px' :'108px'} />
       </Center>
       <Box  >
       <Flex alignItems={'center'} justifyContent={'center'} direction={'column'} >
        
        <Box textAlign={'center'} width={'434px'} height={'68px'} marginTop={'50px'}  >
       <Heading fontStyle={'normal'} fontFamily={'Roboto'} fontWeight={isResponsive? '350px':'700px'} fontSize={isResponsive?'15px':'30px'} lineHeight={'30px'}>
        Page Not Found</Heading>
        <Box  >
        <Image src='./Images/404error.jpg' alt='' marginTop={'20px'} width={isResponsive? '260px':'521px'} height={isResponsive?'138px':'276px'}   /> 
           <Link to="/">
          <Button colorScheme='orange' width={isResponsive?'153px':'307px'} height={isResponsive?'28px':'56px'} marginTop={'30px'}>Back to home page</Button> 
          </Link>
         </Box>
        </Box> 
       
        </Flex>
       </Box>
       </Box>
    </div>
  )
}

export default NotFound