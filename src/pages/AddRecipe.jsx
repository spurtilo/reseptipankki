import { useForm, Controller } from "react-hook-form";

import Header from "../components/Header";
import RecipeForm from "../components/RecipeForm";

function AddRecipe() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      ingredients: "",
      instructions: "",
      additionalInfo: "",
      url: "",
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="page-container">
      <Header />
      <RecipeForm
        {...{
          register,
          handleSubmit,
          errors,
          onSubmit,
          control,
          Controller,
        }}
      />
    </div>
  );
}

export default AddRecipe;
