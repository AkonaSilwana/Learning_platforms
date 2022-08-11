import  {FormEvent, useState} from 'react';
import { ChakraProvider,Input,Button, useDisclosure, Heading, Image,Box } from '@chakra-ui/react';
import LoginModal from './LoginModal';
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom';


const form = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault()
    
  const { email , password} = event.target as typeof event.target & {
   
    email: {value: string }
     password: {value: string }
  }
  console.log( email.value, password.value)
}

function Login() {
    const [email , setEmail] = useState("")
  const [password, setPassword] = useState("")

   const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <ChakraProvider>
         
      <Image boxSize='200px' src='./Images/picture.jpg' alt=""  width={'300px'}
height={'400px'} position={'absolute'} left={'250px'}/>
<Box background={'#F7F8FF'} width={'300px'} height={'400px'}>  
      <Heading>Login </Heading>
       <Image boxSize='100px' align={'center'} src='./Images/logo.png' alt="logo" />
    <form onSubmit={event => {form(event)}}>
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
       {<Button marginBottom={'15px'} height={'33px'} width={'100px'} colorScheme='orange' onClick={onOpen}>Login</Button> }
     </form>
     <LoginModal  email={email} isOpen={isOpen} onClose={onClose} onOpen={onOpen}/>
      <p>Don't have an acount ? <Link to="/SignUp">Sign Up</Link></p>
     </Box>
     </ChakraProvider>
      
  )
}

export default Login