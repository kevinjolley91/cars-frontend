/* eslint-disable react/prop-types */
export function ModelsIndex(props) {
  return (
    <div>
      <h1>All Models</h1>
      {props.models.map((model) => (
        <div key={model.id}>
          <h2>{model.name}</h2>
          <img src={model.img} height="300" width="450" />
          <p>Manufacturer: {model.manufacturer.name}</p>
          <p>Year Introduced: {model.year_introduced}</p>
          <p>Body Styles: {model.body_styles}</p>
          <button onClick={() => props.onShowModel(model)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
