import { useForm } from "react-hook-form";

import Header from "../components/Header";
import RecipeForm from "../components/RecipeForm";

function AddRecipe() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="page-container">
      <Header />
      <RecipeForm {...{ register, handleSubmit, errors, onSubmit }} />
    </div>
  );
}

export default AddRecipe;
