import axios from "axios";
import { useState, useEffect } from "react";
import { ManufacturersIndex } from "./ManufacturersIndex";
import { ManufacturersNew } from "./ManufacturersNew";

export function Content() {
  const [manufacturers, setManufacturers] = useState([]);

  const handleIndexManufacturers = () => {
    console.log("handleIndexManufacturers");
    axios.get("http://localhost:3000/manufacturers.json").then((response) => {
      console.log(response.data);
      setManufacturers(response.data);
    });
  };

  useEffect(handleIndexManufacturers, []);

  return (
    <div>
      <ManufacturersNew />
      <ManufacturersIndex manufacturers={manufacturers} />
    </div>
  );
}
