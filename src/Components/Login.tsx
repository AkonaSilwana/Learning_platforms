import  {ChangeEvent, FormEvent, useState} from 'react';
import { Input,Button, useDisclosure, Heading, Image,Box, useMediaQuery, Text, Center } from '@chakra-ui/react';
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

    const [isMobile] = useMediaQuery('(max-width: 750px)')
    const  [isMobileHeight] = useMediaQuery('(min-height: 745px)')

    const handleChange1 = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
       
    }
     const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
           setPassword(event.target.value)
     }
  return (
    <>
        <Box textAlign={'center'} height={'100%'} width={'100%'}>
          <Box display={isMobile ? 'reverse-column':'flex'} alignItems={'center'} width={'100%'}>
            <Box height={isMobileHeight?'1500px':'700px'} width={isMobile ?'100%':'50%'}>
      <Image boxSize='100%' src='./Images/picture.jpg' alt=""  width={'100%'}
height={'100%'} />
             </Box>
<Box background={'#F7F8FF'}  width={isMobile ?'100%':'50%'} height={isMobileHeight?'1500px':'700px'} >  
      <Heading  left={'150px'} fontStyle={'normal'} fontFamily={'Roboto'} fontWeight={'700px'} fontSize={isMobileHeight?'60px':'30px'} lineHeight={'30px'} marginTop={isMobileHeight ? '200px':'10px'}>Login </Heading>
        <Center alignItems={'center'} left={200}>
       <Image  src='./Images/logo.png' alt="logo"  width={'250px'} height={isMobileHeight?'450px':'250px'}  />
        </Center>
       <Text color={'grey'} >OR</Text>
    <form  onSubmit={event => {form(event)}}>
       <fieldset>
         <Input
          width={isMobile?'150px':'300px'}
          variant="flushed"
          marginTop={'100px'}
           value={email}
         type="email" 
         id="email"
         placeholder='Email Address'
           onChange={handleChange1}
        />
      </fieldset>
      <fieldset>
        <Input
         width={isMobile?'150px':'300px'}
          marginBottom={'20px'}
           variant="flushed"
        value={password}
        type="password"
        id="password"
        placeholder='Password'
         onChange={handleChange2}
       />
       <ViewOffIcon left={'500px'}/>
      </fieldset>
       {<Button marginBottom={'15px'} height={'53px'} width={isMobile?'217px':'434px'}  colorScheme='orange' onClick={onOpen}>Login</Button> }
     </form>
     <LoginModal  email={email} isOpen={isOpen} onClose={onClose} onOpen={onOpen}/>
      <p>Don't have an acount ? <Link to="/SignUp">Sign Up</Link></p>
     </Box>
     </Box>
      </Box>
       
     </>
      
  )
}

export default Login