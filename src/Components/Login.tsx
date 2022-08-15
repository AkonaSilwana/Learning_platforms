import  {FormEvent, useState} from 'react';
import { ChakraProvider,Input,Button, useDisclosure, Heading, Image,Box } from '@chakra-ui/react';
import LoginModal from './LoginModal';
import { Link  } from 'react-router-dom';
import { ViewOffIcon } from '@chakra-ui/icons';


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
         
      <Image boxSize='200px' src='./Images/picture.jpg' alt=""  width={'600px'}
height={'700px'} position={'absolute'} left={'50px'}/>
<Box background={'#F7F8FF'}  width={'600px'} height={'700px'} position={'absolute'} right={'5px'} >  
      <Heading  left={'150px'}>Login </Heading>
       <Image  src='./Images/logo.png' alt="logo" width={'250px'} height={'250px'}  right={'100px'} />
    <form  onSubmit={event => {form(event)}}>
       <fieldset>
         <Input
          width={'300px'}
          variant="flushed"
          marginTop={'100px'}
          left={'150px'}
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
          marginBottom={'20px'}
            left={'150px'}
         variant="flushed"
        value={password}
        type="password"
        id="password"
        placeholder='Password'
         onChange={(event: any) => {setPassword(event.target.value)}}
       />
       <ViewOffIcon left={'500px'}/>
      </fieldset>
       {<Button marginBottom={'15px'} height={'33px'} width={'100px'} left={'150px'} colorScheme='orange' onClick={onOpen}>Login</Button> }
     </form>
     <LoginModal  email={email} isOpen={isOpen} onClose={onClose} onOpen={onOpen}/>
      <p>Don't have an acount ? <Link to="/SignUp">Sign Up</Link></p>
     </Box>
     </ChakraProvider>
      
  )
}

export default Login