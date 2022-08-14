import React from 'react'
import {ChakraProvider,Box, Modal, ModalOverlay, ModalContent,ModalHeader,ModalFooter,
   ModalBody, ModalCloseButton,Text , Button, Image} from '@chakra-ui/react'

    
  
   type SignUpUserDetails = {
    name: string
    email: string
    onClose: () => void
    onOpen: () => void
    isOpen: boolean
   }
function UserDetailsSignUpModal(props: SignUpUserDetails) {
    
   
   

  return (
    <ChakraProvider>
        
     <>
     <Box  alignItems={'center'}>
      <Modal  isOpen={props.isOpen} onClose={props.onClose} >
        <ModalOverlay />
        <ModalContent display="flex" alignItems="center" justifyContent="space-between" boxSize={'300px'}  borderRadius={'60px'}>
           <Image boxSize='100px' align={'center'} src='./Images/logo.png' alt="logo" />
          <ModalHeader>USER ADDED</ModalHeader>
          <ModalCloseButton />
          <ModalBody >
            <fieldset>
              <Text>{props.name}</Text> 
           
           </fieldset>
            <fieldset>
             
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
      
      </ChakraProvider>
  )
}

export default UserDetailsSignUpModal