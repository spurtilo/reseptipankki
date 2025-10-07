import { useForm, Controller } from "react-hook-form";

import Header from "../components/Header";
import RecipeForm from "../components/RecipeForm";

function AddRecipe() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    control,
    formState: { errors },
  } = useForm();

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
          setValue,
          getValues,
          Controller,
          control,
        }}
      />
    </div>
  );
}

export default AddRecipe;
