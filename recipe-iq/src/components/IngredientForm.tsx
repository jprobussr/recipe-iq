import { useState, type ChangeEvent, type SubmitEvent } from 'react';
import './IngredientForm.css';

type IngredientFormProps = {
  onAddIngredient: (ingredientName: string) => void;
};

const IngredientForm = ({ onAddIngredient }: IngredientFormProps) => {
  const [ingredient, setIngredient] = useState('');

  const handleIngredientChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIngredient(event.target.value);
  };

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedIngredient = ingredient.trim();

    if (!trimmedIngredient) {
      return;
    }

    onAddIngredient(trimmedIngredient);

    setIngredient('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="e.g. Chicken"
        value={ingredient}
        onChange={handleIngredientChange}
      />

      <button>Add Ingredient</button>
    </form>
  );
};

export default IngredientForm;
