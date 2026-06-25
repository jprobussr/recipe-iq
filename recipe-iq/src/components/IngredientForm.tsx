import { useState, type ChangeEvent, type SubmitEvent } from 'react';
import './IngredientForm.css';


const IngredientForm = () => {
  const [ingredient, setIngredient] = useState('');

  const handleIngredientChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    console.log(event.target.value);
    setIngredient(event.target.value);
  };

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(ingredient);
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
