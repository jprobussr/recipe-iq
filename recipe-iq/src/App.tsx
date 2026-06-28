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
    setIngredients((prevIngredients) => [
      ...prevIngredients,
      {
        id: Date.now(),
        name: ingredientName,
      },
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
      <IngredientList ingredients={ingredients} onDeleteIngredient={handleDeleteIngredient} />
    </main>
  );
};

export default App;
