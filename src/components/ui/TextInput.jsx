import { Input } from "@chakra-ui/react";

export const TextInput = ({changeFn}) => {
  
  

  return (

    <Input
      placeholder="Search recipes"
      borderRadius="0.5rem"
      color="dimgray"
      backgroundColor="white"
      width="30rem"
      fontSize="1.25rem"
      marginTop="2rem"
      marginBottom="2rem"
      onChange={changeFn}
    >
      
    </Input>

  );
};