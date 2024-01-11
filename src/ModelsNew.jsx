/* eslint-disable react/prop-types */
export function ModelsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateModel(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Model</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Manufacturer ID: <input name="manufacturer_id" type="text" />
        </div>
        <div>
          Year Introduced: <input name="year_introduced" type="text" />
        </div>
        <div>
          Body Styles: <input name="body_styles" type="text" />
        </div>
        <div>
          Image: <input name="img" type="text" />
        </div>
        <button type="submit">Create Model</button>
      </form>
    </div>
  );
}
