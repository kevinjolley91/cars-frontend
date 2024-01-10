export function ManufacturersNew() {
  return (
    <div>
      <h1>New Manufacturer</h1>
      <form>
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
      </form>
    </div>
  );
}
