import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";

const RecipeForm = ({
  register,
  handleSubmit,
  errors,
  onSubmit,
  control,
  Controller,
}) => {
  const urlPattern =
    /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)$/i;

  return (
    <div className="recipe-form-container">
      <form className="recipe-form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="form-header">Syötä Resepti</h1>
        <div className="form-row">
          <label className="form-label" htmlFor="name">
            Nimi:
          </label>
          <div className="form-field-container">
            <input
              type="text"
              id="name"
              name="name"
              className="form-field"
              {...register("name", { required: true })}
            />
            <div className="error">
              {errors.name && <>Tämä kenttä on pakollinen</>}
            </div>
          </div>
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="shortDescription">
            Lyhyt kuvaus:
          </label>
          <div className="form-field-container">
            <textarea
              type="text"
              id="shortDescription"
              name="shortDescription"
              className="text-area"
              rows={4}
              {...register("shortDescription", { required: true })}
            />
            <div className="error">
              {errors.shortDescription && <>Tämä kenttä on pakollinen</>}
            </div>
          </div>
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="ingredients">
            Ainekset:
          </label>
          <div className="form-field-container">
            <Controller
              name="ingredients"
              control={control}
              rules={{ required: "Ainekset ovat pakollisia" }}
              render={({ field }) => (
                <MDEditor
                  {...field}
                  value={field.value}
                  onChange={field.onChange}
                  previewOptions={{
                    rehypePlugins: [[rehypeSanitize]],
                  }}
                />
              )}
            />
            <div className="error">
              {errors.ingredients && errors.ingredients.message}
            </div>
          </div>
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="instructions">
            Vaiheet:
          </label>
          <div className="form-field-container">
            <Controller
              name="instructions"
              control={control}
              rules={{ required: "Vaiheet ovat pakollisia" }}
              render={({ field }) => (
                <MDEditor
                  {...field}
                  value={field.value}
                  onChange={field.onChange}
                  previewOptions={{
                    rehypePlugins: [[rehypeSanitize]],
                  }}
                />
              )}
            />

            <div className="error">
              {errors.instructions && <>Tämä kenttä on pakollinen</>}
            </div>
          </div>
        </div>
        <div className="form-row">
          <label className="form-label" htmlFor="additionalInfo">
            Lisätietoja:
          </label>
          <div className="form-field-container">
            <textarea
              type="text"
              id="additionalInfo"
              name="additionalInfo"
              className="text-area"
              rows={4}
              {...register("additionalInfo")}
            />
            <div className="error">
              {errors.additionalInfo && errors.additionalInfo.message}
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
