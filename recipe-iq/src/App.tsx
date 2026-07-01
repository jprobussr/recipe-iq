import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import IngredientForm from './components/IngredientForm';
import IngredientList from './components/IngredientList';
import RecipeAction from './components/RecipeAction';

type Ingredient = {
  id: number;
  name: string;
};

const App = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  const handleAddIngredient = (ingredientName: string) => {
    const ingredientExists = ingredients.some((ingredient) => {
      return ingredient.name.toLowerCase() === ingredientName.toLowerCase();
    });

    if (ingredientExists) {
      return;
    }

    setIngredients((prevIngredients) => [
      ...prevIngredients,
      { id: Date.now(), name: ingredientName },
    ]);
  };

  const handleDeleteIngredient = (id: number) => {
    setIngredients((prevIngredients) => {
      return prevIngredients.filter((ingredient) => {
        return ingredient.id !== id;
      });
    });
  };

  const handleGetRecipe = () => {
    console.log(ingredients);
  }

  return (
    <main className="app">
      <Header />
      <IngredientForm onAddIngredient={handleAddIngredient} />

      {ingredients.length > 0 && (
        <IngredientList
          ingredients={ingredients}
          onDeleteIngredient={handleDeleteIngredient}
        />
      )}

      {ingredients.length > 0 && <RecipeAction onGetRecipe={handleGetRecipe} />}
    </main>
  );
};

export default App;
