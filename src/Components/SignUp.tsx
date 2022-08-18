import type {FormEvent, ChangeEvent} from 'react';
import {  Input, Heading, useDisclosure, Button, Image, Box,Text, useMediaQuery, Center, } from '@chakra-ui/react';
import UserDetailsSignUpModal from './UserDetailsSignUpModal';
import { Link  } from 'react-router-dom';
import  {useState} from 'react';

import { ViewOffIcon } from '@chakra-ui/icons';

const sendForm = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault()
    
  const {fullName, email , password} = event.target as typeof event.target & {
    fullName: {value: string}
    email: {value: string }
     password: {value: string }
    
  }
  console.log(fullName.value, email.value, password.value)
}



function SignUp() {
     const [fullName , setFullName] = useState("")
  const [email , setEmail] = useState("")
  const [password, setPassword] = useState("")

   const { isOpen, onOpen, onClose } = useDisclosure()

    const [isResponsive] = useMediaQuery('(max-width: 750px)')

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFullName(event.target.value)
       
    }
    const handleChange1 = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
       
    }
    const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
       
    }
 
  return (
      <>
      
      
      <Box textAlign={'center'} height={'100vh'} width={'100%'}>
      <Box display={ isResponsive ? 'column':'flex'} alignItems={'center'} width={'100%'} > 
        
      <Box height={'700px'} width={isResponsive ?'95%':'50%'}>
        
      <Image boxSize='200px' src='./Images/picture.jpg' alt="" width={'100%'}
height={'700px'} />
      </Box>
      
    
     <Box background={'#F7F8FF'}  height={'700px'} width={isResponsive ?'95%':'50%'} >
     
      <Heading>Sign Up</Heading>
    
     <Center alignItems={'center'} left={200}>
    { <Image  src='./Images/logo.png' alt="logo" width={'313px'} height={'158px'}/> }
   </Center>
  
     <Text color={'grey'}>OR</Text>
<form onSubmit={event => {sendForm(event)}}>
        <fieldset>
           
         <Input
          marginTop={'80px'}
         width={'300px'}
         variant="flushed"
         value={fullName}
         type="text" 
         id="name"
         placeholder='FullName'
         onChange={handleChange}
        />
        
      </fieldset>
      <fieldset>
         <Input
          width={'300px'}
         variant="flushed"
         value={email}
         type="email" 
         id="email"
         placeholder='Email Address'
          onChange={handleChange1}
         />
      </fieldset>
      <fieldset>
        <Input
        width={'300px'}
        marginBottom={'20px'}
         variant="flushed"
        value={password}
        type="password"
        id="password"
        placeholder='Password'
        
         onChange={handleChange2}
       />
       <ViewOffIcon/>
      </fieldset>
      
     </form>
     
      <Button marginBottom={'10px'} height={'53px'} width={'434px'} colorScheme='orange' onClick={onOpen}>Create Account</Button>
      <UserDetailsSignUpModal name={fullName} email={email} isOpen={isOpen} onClose={onClose} onOpen={onOpen}/>
        <Text>Already have an acount ? <Link to="/Login">Login</Link></Text>
        
        </Box>
       
        </Box>
        </Box>
        
   
        </>
  )
}

export default SignUp