import React from 'react'
import {ChakraProvider,Box, useDisclosure,Modal, ModalOverlay, ModalContent,ModalHeader,ModalFooter,
   ModalBody, ModalCloseButton,Text , Button, Input, Image} from '@chakra-ui/react'

   
   type LoginUserDetails = {
    
    email: string
    onClose: () => void
    isOpen: boolean
    onOpen: () => void
   }
function LoginModal(props: LoginUserDetails) {
    
  return (
    <>
      

     <Box >
      
      <Modal  isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent display="flex" alignItems="center" justifyContent="space-between" boxSize={'400px'}  borderRadius={'60px'}>
           <Image boxSize='100px' align={'center'} src='./Images/logo.png' alt="logo" />
          <ModalHeader  fontFamily={'Roboto'} fontSize={'30px'}>USER ADDED</ModalHeader>
          <ModalCloseButton />
          <ModalBody  >
            <fieldset>
           <Input
            fontFamily={'Roboto'}
            htmlSize={12} width='auto'
              variant='filled'
           placeholder='FullName'
           marginBottom={'15px'}
          
           />
           <Text></Text>
           </fieldset>
            <fieldset>
           <Input
             fontFamily={'Roboto'}
              htmlSize={12} width='auto'
              variant='filled'
           placeholder='Email Address'
           />
           <Text>{props.email}</Text>
           </fieldset>
          </ModalBody>
           <Text></Text>
          <ModalFooter>
           
            <Button width={'200px'} colorScheme='orange' mr={3} onClick={props.onClose}>
              Close 
            </Button>
           
          </ModalFooter>
        </ModalContent>
      </Modal>
      </Box>
      </>
  )
}

export default LoginModal