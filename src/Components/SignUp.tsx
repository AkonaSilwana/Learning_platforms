import  {FormEvent, useState} from 'react';
import { ChakraProvider, Input, Heading, useDisclosure, Button, Image, Box, Icon } from '@chakra-ui/react';
import UserDetailsSignUpModal from './UserDetailsSignUpModal';
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';
import Login from './Login';

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
  return (
     <ChakraProvider>
      
       
      <Image boxSize='200px' src='./Images/picture.jpg' alt="" width={'300px'}
height={'400px'} position={'absolute'} left={'250px'}/>
     <Box background={'#F7F8FF'} width={'300px'} height={'400px'}>  
    <Heading>Sign Up</Heading>
    <Image  src='./Images/logo.png' alt="logo" width={'100px'} height={'100px'}/>

<form onSubmit={event => {sendForm(event)}}>
        <fieldset>
         <Input
         width={'150px'}
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
         width={'150px'}
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
        width={'150px'}
        marginBottom={'20px'}
         variant="flushed"
        value={password}
        type="password"
        id="password"
        placeholder='Password'
        
         onChange={(event: any) => {setPassword(event.target.value)}}
       />
      </fieldset>
      
     </form>
      <Button marginBottom={'10px'} height={'33px'} colorScheme='orange' onClick={onOpen}>Create Account</Button>
      <UserDetailsSignUpModal name={fullName} email={email} isOpen={isOpen} onClose={onClose} onOpen={onOpen}/>
        <p>Already have an acount ? <Link to="/Login">Login</Link></p>
       
        </Box>
     </ChakraProvider>    
  )
}

export default SignUp