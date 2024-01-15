/* eslint-disable react/prop-types */
export function ModelsShow(props) {
  return (
    <div>
      <h1>Model Information</h1>
      <p>Name: {props.model.name}</p>
      <img src={props.model.img} height="300" width="500" alt={props.model.name} />
      <p>Manufacturer: {props.model.manufacturer.name}</p>
      <p>Year Introduced: {props.model.year_introduced}</p>
      <p>Body Styles: {props.model.body_styles}</p>
    </div>
  );
}
