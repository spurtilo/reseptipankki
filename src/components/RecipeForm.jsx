import { useState } from "react";

const RecipeForm = ({ inputData, handleSubmit, handleChange }) => {
  return (
    <div className="recipe-form-container">
      <form className="recipe-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label className="form-label" htmlFor="name">
            Nimi:
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="form-field"
            value={inputData}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="ingredients">
            Ainekset:
          </label>
          <input
            type="text"
            name="ingredients"
            className="form-field"
            value={inputData}
            onChange={handleChange}
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
            value={inputData}
            onChange={handleChange}
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
            value={inputData}
            onChange={handleChange}
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
