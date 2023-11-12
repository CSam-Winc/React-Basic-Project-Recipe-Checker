/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { RecipePage } from './pages/RecipePage';
import { RecipeListPage } from './pages/RecipeListPage';


export const App = () => {
  // console.log(data.hits[0].recipe);
  const [selectedRecipeItem, setSelectedRecipeItem] = useState ();
  

  return (
    <div>

        {selectedRecipeItem ? (
         
         <RecipePage recipe={selectedRecipeItem}  clickFn={setSelectedRecipeItem}/>

        ) : ( <RecipeListPage clickFn={setSelectedRecipeItem}/> 
      )}
      
    </div>
  );
};
