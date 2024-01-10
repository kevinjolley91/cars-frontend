/* eslint-disable react/prop-types */
export function ManufacturersShow(props) {
  return (
    <div>
      <h1>Manufacturer Information</h1>
      <p>Name: {props.manufacturer.name}</p>
      <img src={props.manufacturer.img_logo} height="200" width="400" />
      <p>Year Established: {props.manufacturer.year_created}</p>
      <p>Country of Origin: {props.manufacturer.country}</p>
    </div>
  );
}
