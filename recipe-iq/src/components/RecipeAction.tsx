import './RecipeAction.css';

type RecipeActionProps = {
  onGetRecipe: () => void;
};

const RecipeAction = ({ onGetRecipe }: RecipeActionProps) => {
  return (
    <div>
      <section className="recipe-action">
        <h2>Ready for a recipe</h2>
        <p>Generate a recipe from your ingredient list.</p>
        <button type="button" onClick={onGetRecipe}>
          Get Recipe
        </button>
      </section>
    </div>
  );
};

export default RecipeAction;
