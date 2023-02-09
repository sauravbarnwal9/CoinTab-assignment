import React from 'react'
import { Button,HStack,Box,ButtonGroup, useToast } from '@chakra-ui/react'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"
const HomePage = () => {
    const [loading,setLoading] = useState(false);
    const [loading1,setLoading1] = useState(false);
    const toast = useToast();
const fetchUsers=()=>{
    setLoading(true)
    fetch('https://backendcointab.vercel.app/getall')
  .then((response) => response.json())
  .then((data) => {
    
   if(data){
    toast({
      title: 'Data Fetched Successfully',
    
      status: 'success',
      duration: 2000,
      isClosable: true,
    })
   }
    setLoading(false);
  });
  
}
const DeleteUsers=()=>{
  alert("All The Data Will be Deleted");
    setLoading1(true)
    fetch('https://backendcointab.vercel.app/api/delete', {
        method: 'DELETE'
      
      })
        .then((response) => response.json())
        .then((data) => {
         
          setLoading1(false)
        })
        .catch((error) => {
         // console.error('Error:', error);
          setLoading1(false);
        });
        toast({
          title: 'Data Deleted Successfully',
          status: 'error',
          duration: 2000,
          isClosable: true,
        })
}
const navigate = useNavigate();
const userDetails=()=>{
navigate("/users")
}
  return (
   <>
   <Box bg="blue" h="100vh">
   <Box
    display='flex'
    alignItems='center'
    justifyContent='center'
    
    width='100%'
    py={310}
    bgPosition='center'
    bgRepeat='no-repeat'
    
  >
    <ButtonGroup gap='4'>
    {
    loading?<Button
    isLoading
    colorScheme='blue'
    
  >
    Click me
  </Button>
    : <Button onClick={fetchUsers} colorScheme='blue'>
    Fetch Users
   </Button>
 }
  {
    loading1?<><Button
    isLoading
    colorScheme='blue'
    
  >
    Click me
  </Button></>
    :<Button colorScheme='blue' onClick={DeleteUsers}>
    Delete Users
    </Button>
  }
  <Button colorScheme='blue' onClick={userDetails}>
  User Details
  </Button>
    </ButtonGroup>
  </Box>
   </Box>
    
   </>
  )
}

export default HomePage