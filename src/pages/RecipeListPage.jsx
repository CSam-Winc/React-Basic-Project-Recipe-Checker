/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Center, Heading, Flex, Container,} from '@chakra-ui/react';
import { RecipeItemCard } from '../components/RecipeItemCard';
import { data } from '../utils/data';
import { TextInput } from '../components/ui/TextInput';

export const RecipeListPage = ({clickFn}) => {

  const [searchField, setSearchField] = useState("");

  // console.log(searchField);
  
  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  

  return (

      <Container 
        maxWidth="xxl"
        maxHeight="800vh"
        minHeight="100vh"
        backgroundColor="blue.500"
        // bgGradient="linear(to-br, blue.500, blue.100 , blue.500)"
      >     


  {/* RECIPE TITEL  */}
          <Center>
              <Heading 
                fontSize="1.8rem"
                fontWeight="500"
                color="white"
                marginTop="2rem"
              >
                      Winc Recipe Checker
              </Heading>
          </Center>
          

  {/* TEXT INPUT COMPONENT  */}
          <Center>
            <TextInput changeFn={handleChange}/>
          </Center>    


{/* BODY PLACING */}
          <Center>
              <Flex 
                gap="2rem"
                width={["full", "75%"]}
                justify="center"
                alignItems="center"
                flexDirection={["column", "row"]}
                flexWrap="wrap"
                marginBottom="5rem"
              >
              
{/* RECIPE FILTER  */}
                  {data.hits.filter((recipe) => {
                    const nameMatch = recipe.recipe.label.toLowerCase().includes(searchField.toLowerCase());

                    const healthLabelsMatch = recipe.recipe.healthLabels.some(
                      (label) => label.toLowerCase().includes(searchField.toLowerCase())
                    );

                    return nameMatch || healthLabelsMatch;
                    
                  }) 
                    
                  .map( (recipe) => (
                    <RecipeItemCard {...recipe.recipe} clickFn={clickFn} recipe={recipe} key={recipe.recipe.label} /> ))}
              
              </Flex>
          </Center>

        </Container>
  );
};
