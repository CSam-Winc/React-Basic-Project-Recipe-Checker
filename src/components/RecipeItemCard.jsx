import { Card, CardBody, Image, Stack, Heading, Text, Tag, Container, Box, } from "@chakra-ui/react";


export const RecipeItemCard = ({recipe, clickFn, dietLabels, healthLabels, cautions}) => {

  return (

    <Card
      borderRadius="xl"
      width="20em"
      height="32rem"
      onClick={() => clickFn(recipe)}
      cursor="pointer"
      _hover={{ transform: 'scale(1.01)' }}
      background="blue.100"
    >
    
      <CardBody
        backgroundColor="white"
        borderRadius="xl"
        padding="-0.25"
      >

{/* IMAGE */}
          <Image 
            src={recipe.recipe.image} 
            alt={recipe.recipe.label}
            width="20rem" 
            height="12rem"
            objectFit="cover"
            borderRadius="0.5rem 0.5rem 0px 0px" 
          />

          <Stack
            marginTop="6"
            spacing="0.3rem"
            textAlign="center"
          >

{/* MEAL TYPE */}
            <Text
              textTransform="uppercase"
              color="gray.600"
              fontSize="xs"
              fontWeight="500"
            >
              {recipe.recipe.mealType}
            </Text>

{/* RECIPE LABEL/NAME */}
            <Heading
              fontSize="2xl"
              fontWeight="500"
              padding="0rem 1rem 0.5rem 1rem"
            >
              {recipe.recipe.label}
            </Heading>

{/* HEALTH LABELS */}
            <Container>
              {healthLabels.includes("Vegan") && (
                
                <Tag
                  margin="1"
                  backgroundColor="purple.100"
                  justifyContent="center"
                  fontSize="xs"
                >
                  VEGAN
                </Tag>
                
              )}

              {healthLabels.includes("Vegetarian") && (
                
                <Tag
                  margin="1"
                  backgroundColor="purple.100"
                  justifyContent="center"
                  fontSize="xs"
                  textTransform="uppercase"
                  >
                    Vegetarian
                </Tag>
                
              )}
            </Container>

{/* DIET LABELS */}
          {dietLabels && (
            <Box> {dietLabels.map((dietLabel) => (

                <Tag
                  key={dietLabel}
                  margin="1"
                  backgroundColor="green.100"
                  justifyContent="center"
                  fontSize="xs"
                  textTransform="uppercase"
                >
                  {dietLabel}
                </Tag>

              ))}
             </Box>
          )};


{/* DISH TYPE */}
          <Box>
            <Text 
              fontWeight="500"
            >   Dish: 
            </Text>

            <Text> 
              {recipe.recipe.dishType} 
            </Text>
          </Box>
     

{/* CAUTIONS */}
          {cautions && (

            <Box>     
              <Text
                fontSize="sm"
                fontWeight="700" 
              >
                Cautions:
              </Text>

              {cautions.map((caution) => (
                
                <Tag
                  key={caution}
                  margin="2"
                  backgroundColor="red.200"
                >
                  {caution}
                </Tag>

              ))}
            
            </Box>
          )};
                      
          </Stack> 
      </CardBody>     
    </Card>

  );
};