/* eslint-disable react/prop-types */
export function ModelsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateModel(props.model.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyModel(props.model);
  };

  return (
    <div>
      <h1>Model Information</h1>
      <p>Name: {props.model.name}</p>
      <img src={props.model.img} height="300" width="500" alt={props.model.name} />
      <p>Manufacturer: {props.model.manufacturer.name}</p>
      <p>Year Introduced: {props.model.year_introduced}</p>
      <p>Body Styles: {props.model.body_styles}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.model.name} name="name" type="text" />
        </div>
        <div>
          Image Link: <input defaultValue={props.model.img} name="img" type="text" />
        </div>
        <div>
          Manufacturer: <input defaultValue={props.model.manufacturer.id} name="manufacturer_id" type="text" />
        </div>
        <div>
          Year Introduced: <input defaultValue={props.model.year_introduced} name="year_introduced" type="text" />
        </div>
        <div>
          Body Styles: <input defaultValue={props.model.body_styles} name="body_styles" type="text" />
        </div>
        <button type="submit">Update Model</button>
      </form>
      <button onClick={handleClick}>Remove Model</button>
    </div>
  );
}
