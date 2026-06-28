import './IngredientList.css';

type Ingredient = {
  id: number;
  name: string;
};

type IngredientListProps = {
  ingredients: Ingredient[];
  onDeleteIngredient: (id: number) => void;
};

const IngredientList = ({
  ingredients,
  onDeleteIngredient,
}: IngredientListProps) => {
  return (
    <section>
      <h2>Ingredients</h2>

      <ul>
        {ingredients.map((ingredient) => {
          return (
            <li key={ingredient.id}>
              {ingredient.name}{' '}
              <button
                type="button"
                onClick={() => onDeleteIngredient(ingredient.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default IngredientList;
