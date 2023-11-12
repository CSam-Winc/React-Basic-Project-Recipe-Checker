

import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Image ,Button, Center, Container ,Card, CardBody, Stack, Heading, Text, Flex, List, ListItem, Box, Tag, StackDivider} from "@chakra-ui/react";


export const RecipePage = ({recipe, clickFn}) => {



  return (

    <Container
      maxWidth="xxl"
      minHeight="100vh"
      // height="full"
      // maxHeight="100vh"
      backgroundColor="blue.500"
    >

      <Center>

        <Card
        minWidth="sm"
        maxWidth="65vw"
        // maxHeight="full"
        >

          <CardBody 
            padding="-0.25"
            // height="full"
            backgroundColor="white"
          >

{/* BUTTON */}
              <Button 
                onClick={() => clickFn()}
                marginTop="1rem"
                leftIcon={<ArrowLeftIcon />}
              >
                See all recipes
              </Button>

{/* IMAGE */}
              <Image
                marginTop="1rem"
                boxSize="100%"
                height="20rem"
                objectFit="cover"
                src={recipe.recipe.image}
                alt={recipe.recipe.label} 
              />

              <Stack
                divider={<StackDivider borderColor="gray.300" />}
                margin="2rem 3rem 0rem 3rem"
                spacing="4"
                direction="row"      
              >

                <Box
                  width="100rem"
                >

{/* CUISINE TYPE */}
                    <Text
                      textTransform="uppercase"
                      color="gray.600"
                      fontSize="0.8em"
                      fontWeight="700"
                    >
                      {recipe.recipe.cuisineType} cuisine 
                    </Text>

{/* MEAL TYPE AND DISH TYPE */}
                    <Text
                      textTransform="uppercase"
                      color="gray.600"
                      fontSize="xs"
                      fontWeight="500"
                      marginBottom="1rem"
                    >
                      {recipe.recipe.mealType} meal: {recipe.recipe.dishType}
                    </Text>

{/* RECIPE LABEL/NAME */}
                    <Heading
                      fontSize="2xl"
                      fontWeight="500"
                      marginBottom="0.5rem"
                    >
                        {recipe.recipe.label}
                    </Heading>

{/* COOKING TIME AND SERVINGS */}
                    <List
                      marginBottom="0.5rem"
                    > 
                      <ListItem> 
                        Total cooking time: {recipe.recipe.totalTime} minutes 
                      </ListItem> 
                      
                      <ListItem> 
                        Servings: {recipe.recipe.yield} 
                      </ListItem>
                    </List>

{/* INGREDIENTS LIST */}
                    <Text
                      marginBottom="0.5rem"
                      fontWeight="500"
                    >
                      Ingredients:
                    </Text>

                    <List
                      spacing="0.1rem"
                      marginBottom="3rem"
                    >
                      
                      {recipe.recipe.ingredientLines.map((ingredient) => (
                      
                        <ListItem    
                          key={ingredient}
                        >   {ingredient} 
                        </ListItem>

                      ))}

                    </List>

                </Box>

{/* HEALTH LABELS */}
                <Box
                  width="100rem"
                >

                  <Text> 
                    Health labels:
                  </Text>

                    {recipe.recipe.healthLabels.map( (healthLabel) => (
                      <Tag 
                        margin="1"
                        backgroundColor="purple.100"
                        key={healthLabel}
                      >
                        {healthLabel}
                      </Tag>
                    ))}


{/* DIET LABELS */}
                    <Text
                      marginTop="4"
                    > 
                      Diet: 
                    </Text>

                    {recipe.recipe.dietLabels.map( (dietLabel) => (
                      <Tag
                        margin="1"
                        backgroundColor="green.100"
                        key={dietLabel}
                      > 
                        {dietLabel} 
                      </Tag>
                    ))}


{/* CAUTIONS */}
                    <Text
                      marginTop="4"
                    > 
                      Cautions: 
                    </Text>

                    {recipe.recipe.cautions.map( (caution) => (
                      <Tag
                        margin="1"
                        backgroundColor="red.200"
                        key={caution}
                      > 
                        {caution} 
                      </Tag>
                    ))}

{/* NUTRIENTS */}
                    <Text
                      marginTop="1rem"
                      marginBottom="1rem"
                      fontWeight="500"
                    > 
                      Total nutrients: 
                    </Text>

                    <Flex 
                      gap="1.5rem"
                      flexWrap="wrap"
                      fontSize="sm"
                      marginBottom="2rem"
                    >

                      <Box>
                        {Math.round(recipe.recipe.totalNutrients.ENERC_KCAL.quantity)}
                       
                        <Text 
                          textTransform="uppercase"
                          fontWeight="500" 
                        >   CALORIES
                        </Text>
                      </Box>

                      <Box>
                        {Math.round(recipe.recipe.totalNutrients.CHOCDF.quantity)} g
                       
                        <Text 
                          textTransform="uppercase"
                          fontWeight="500"
                        >   {recipe.recipe.totalNutrients.CHOCDF.label}
                        </Text>
                      </Box>

                      <Box>
                        {Math.round(recipe.recipe.totalNutrients.PROCNT.quantity)} g
                       
                        <Text 
                          textTransform="uppercase"
                          fontWeight="500"
                        >   {recipe.recipe.totalNutrients.PROCNT.label}
                        </Text>
                      </Box>

                      <Box>
                        {Math.round(recipe.recipe.totalNutrients.FAT.quantity)} g
                       
                        <Text 
                          textTransform="uppercase"
                          fontWeight="500"
                        >   {recipe.recipe.totalNutrients.FAT.label}
                        </Text>
                      </Box>

                      <Box>
                        {Math.round(recipe.recipe.totalNutrients.CHOLE.quantity)} mg
                       
                        <Text 
                          textTransform="uppercase"
                          fontWeight="500"
                        >   {recipe.recipe.totalNutrients.CHOLE.label}
                        </Text>
                      </Box>

                      <Box>
                        {Math.round(recipe.recipe.totalNutrients.NA.quantity)} mg
                       
                        <Text 
                          textTransform="uppercase"
                          fontWeight="500"
                        >   {recipe.recipe.totalNutrients.NA.label}
                        </Text>
                      </Box>

                    </Flex>
                </Box>
              </Stack>

          </CardBody>
        </Card>
      </Center>
    </Container>

  );
};