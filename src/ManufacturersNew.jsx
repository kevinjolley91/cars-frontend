/* eslint-disable react/prop-types */
export function ManufacturersNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateManufacturer(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Manufacturer</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Logo: <input name="img_logo" type="text" />
        </div>
        <div>
          Year Established: <input name="year_created" type="text" />
        </div>
        <div>
          Country of Origin: <input name="country" type="text" />
        </div>
        <button type="submit">Add Manufacturer</button>
      </form>
    </div>
  );
}
