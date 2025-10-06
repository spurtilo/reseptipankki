const RecipeForm = ({ register, handleSubmit, errors, onSubmit }) => {
  const urlPattern =
    /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)$/i;

  return (
    <div className="recipe-form-container">
      <form className="recipe-form" onSubmit={handleSubmit(onSubmit)}>
        <h1>SYÖTÄ RESEPTI</h1>
        <div className="form-row">
          <label className="form-label" htmlFor="name">
            Nimi:
          </label>
          <div className="form-field-container">
            <input
              id="name"
              name="name"
              type="text"
              className="form-field"
              {...register("name", { required: true })}
            />
            <div className="error">
              {errors.name && <>Tämä kenttä on pakollinen</>}
            </div>
          </div>
        </div>

        <div className="form-row">
          <label className="form-label" htmlFor="ingredients">
            Ainekset:
          </label>
          <div className="form-field-container">
            <input
              type="text"
              name="ingredients"
              className="form-field"
              {...register("ingredients", { required: true })}
            />
            <div className="error">
              {errors.ingredients && <>Tämä kenttä on pakollinen</>}
            </div>
          </div>
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="instructions">
            Vaiheet:
          </label>
          <div className="form-field-container">
            <input
              type="text"
              name="instructions"
              className="form-field"
              {...register("instructions", { required: true })}
            />
            <div className="error">
              {errors.instructions && <>Tämä kenttä on pakollinen</>}
            </div>
          </div>
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="url">
            URL:
          </label>
          <div className="form-field-container">
            <input
              type="text"
              name="url"
              className="form-field"
              {...register("url", { pattern: urlPattern })}
            />
            <div className="error">
              {errors.url && <>Tämä osoite ei ole validi</>}
            </div>
          </div>
        </div>
        <button className="form-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RecipeForm;
