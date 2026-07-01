import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import IngredientForm from './components/IngredientForm';
import IngredientList from './components/IngredientList';

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

      {ingredients.length > 0 && (
        <section className="recipe-action">
          <h2>Ready for a recipe</h2>
          <p>Generate a recipe from your ingredient list.</p>
          <button type="button">Get Recipe</button>
        </section>
      )}
    </main>
  );
};

export default App;
