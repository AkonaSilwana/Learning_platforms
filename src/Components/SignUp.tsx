import  {FormEvent, useState} from 'react';
import {  Input, Heading, useDisclosure, Button, Image, Box,Text, useMediaQuery } from '@chakra-ui/react';
import UserDetailsSignUpModal from './UserDetailsSignUpModal';
import { Link  } from 'react-router-dom';

import { ViewOffIcon } from '@chakra-ui/icons';

const sendForm = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault()
    
  const {fullName, email , password} = event.target as typeof event.target & {
    fullName: {value: string}
    email: {value: string }
     password: {value: string }
     value:FormEvent
  }
  console.log(fullName.value, email.value, password.value)
}



function SignUp() {
     const [fullName , setFullName] = useState("")
  const [email , setEmail] = useState("")
  const [password, setPassword] = useState("")

   const { isOpen, onOpen, onClose } = useDisclosure()

    const [isResponsive] = useMediaQuery('(max-width: 750px)')
   
 
  return (
      <>
      <Box display={ isResponsive ? 'column':'flex'} alignItems={'center'} width={'100%'} > 
      <Box height={'700px'} width={isResponsive ?'100%':'50%'}>
        
      <Image boxSize='200px' src='./Images/picture.jpg' alt="" width={'100%'}
height={'700px'} />
      </Box>
     
     <Box background={'#F7F8FF'}  height={'700px'} width={isResponsive ?'100%':'50%'} >  
      <Heading>Sign Up</Heading> 
   
    { <Image  src='./Images/logo.png' alt="logo" width={'250px'} height={'250px'}/> }
   
<form onSubmit={event => {sendForm(event)}}>
        <fieldset>
           
         <Input
          marginTop={'80px'}
         width={'300px'}
        left={'150px'}
          variant="flushed"
         value={fullName}
         type="text" 
         id="name"
         placeholder='FullName'
         onChange={(event: any) => {setFullName(event.target.value)}}
        />
        
      </fieldset>
      <fieldset>
         <Input
          width={'300px'}
          left={'150px'}
          variant="flushed"
         value={email}
         type="email" 
         id="email"
         placeholder='Email Address'
          onChange={(event: any) => {setEmail(event.target.value)}}
         />
      </fieldset>
      <fieldset>
        <Input
        width={'300px'}
        left={'150px'}
        marginBottom={'20px'}
         variant="flushed"
        value={password}
        type="password"
        id="password"
        placeholder='Password'
        
         onChange={(event: any) => {setPassword(event.target.value)}}
       />
       <ViewOffIcon/>
      </fieldset>
      
     </form>
     
      <Button marginBottom={'10px'} height={'33px'} colorScheme='orange'  left={'150px'} onClick={onOpen}>Create Account</Button>
      <UserDetailsSignUpModal name={fullName} email={email} isOpen={isOpen} onClose={onClose} onOpen={onOpen}/>
        <Text>Already have an acount ? <Link to="/Login">Login</Link></Text>
       
        </Box>
        
        </Box>
        </>
  )
}

export default SignUp