/* eslint-disable react/prop-types */
export function ManufacturersIndex(props) {
  return (
    <div>
      <h1>All Manufacturers</h1>
      {props.manufacturers.map((manufacturer) => (
        <div key={manufacturer.id}>
          <h2>{manufacturer.name}</h2>
          <img src={manufacturer.img_logo} height="150" width="300" alt={manufacturer.name} />
          <p>Year Established: {manufacturer.year_created}</p>
          <p>Country of Origin: {manufacturer.country}</p>
          <button onClick={() => props.onShowManufacturer(manufacturer)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
