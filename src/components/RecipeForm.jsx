import { useState } from "react";

const RecipeForm = ({ inputData, messages, handleSubmit, handleChange }) => {
  return (
    <div className="recipe-form-container">
      <form className="recipe-form" onSubmit={handleSubmit}>
        <label>
          Nimi:
          <input type="text" value={inputData} onChange={handleChange} />
        </label>
        <label>
          Ainekset:
          <input type="text" value={inputData} onChange={handleChange} />
        </label>
        <label>
          Vaiheet:
          <input type="text" value={inputData} onChange={handleChange} />
        </label>
        <label>
          URL:
          <input type="text" value={inputData} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {messages?.length > 0 &&
        messages.map((message, index) => <li key={index}>{message}</li>)}
    </div>
  );
};

export default RecipeForm;
