import React from 'react'
import { Flex,Button,useColorMode,Select } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
const FilterSection = ({filter,setFilter,setPage}) => {
   
    const navigate = useNavigate();
    function filter(e){
setFilter(e.target.value);
setPage(1);
    }
  return (
    <Flex w="40%" gap="30px" m="auto"  p="50px">
        <Select
          placeholder="Select option"
          onChange={(e) => filter(e)}
        >
          <option value="">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>
     
        <Button
          onClick={() => navigate("/")}
        
          colorScheme={"blue"}
        >
          HomePage
        </Button>
      </Flex>
  )
}

export default FilterSection