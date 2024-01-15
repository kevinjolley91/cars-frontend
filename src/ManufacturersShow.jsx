/* eslint-disable react/prop-types */
export function ManufacturersShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateManufacturer(props.manufacturer.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyManufacturer(props.manufacturer);
  };

  return (
    <div>
      <h1>Manufacturer Information</h1>
      <p>Name: {props.manufacturer.name}</p>
      <img src={props.manufacturer.img_logo} height="300" width="600" alt={props.manufacturer.name} />
      <p>Year Established: {props.manufacturer.year_created}</p>
      <p>Country of Origin: {props.manufacturer.country}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.manufacturer.name} name="name" type="text" />
        </div>
        <div>
          Logo: <input defaultValue={props.manufacturer.img_logo} name="img_logo" type="text" />
        </div>
        <div>
          Year Established: <input defaultValue={props.manufacturer.year_created} name="year_created" type="text" />
        </div>
        <div>
          Country of Origin: <input defaultValue={props.manufacturer.country} name="country" type="text" />
        </div>
        <button type="submit">Update Manufacturer</button>
        <button onClick={handleClick}>Remove Manufacturer</button>
      </form>
    </div>
  );
}
