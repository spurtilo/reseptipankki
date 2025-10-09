import { useForm, Controller } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import recipeService from "../services/recipes";

import AppHeader from "../components/AppHeader";
import RecipeForm from "../components/RecipeForm";

function AddRecipe() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      shortDescription: "",
      ingredients: "",
      instructions: "",
      additionalInfo: "",
      url: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (newRecipe) => {
      return recipeService.create(newRecipe);
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
    reset();
  };

  return (
    <div className="page-container">
      <AppHeader />
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
