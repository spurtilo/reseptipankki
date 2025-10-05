// import { useState } from "react";

const RecipeForm = ({ register, handleSubmit, errors, onSubmit }) => {
  return (
    <div className="recipe-form-container">
      <form className="recipe-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">
          <label className="form-label" htmlFor="name">
            Nimi:
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="form-field"
            {...register("name", { required: true })}
          />
          {errors.name && <div>This field is required</div>}
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="ingredients">
            Ainekset:
          </label>
          <input
            type="text"
            name="ingredients"
            className="form-field"
            {...register("ingredients")}
          />
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="instructions">
            Vaiheet:
          </label>
          <input
            type="text"
            name="instructions"
            className="form-field"
            {...register("instructions")}
          />
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="url">
            URL:
          </label>
          <input
            type="text"
            name="url"
            className="form-field"
            {...register("url")}
          />
        </div>
        <button className="form-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RecipeForm;
