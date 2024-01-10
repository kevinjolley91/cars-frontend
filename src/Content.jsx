import axios from "axios";
import { useState, useEffect } from "react";
import { ManufacturersIndex } from "./ManufacturersIndex";
import { ManufacturersNew } from "./ManufacturersNew";
import { Modal } from "./Modal";

export function Content() {
  const [manufacturers, setManufacturers] = useState([]);

  const handleIndexManufacturers = () => {
    console.log("handleIndexManufacturers");
    axios.get("http://localhost:3000/manufacturers.json").then((response) => {
      console.log(response.data);
      setManufacturers(response.data);
    });
  };

  const handleCreateManufacturer = (params, successCallback) => {
    console.log("handleCreateManufacturer", params);
    axios.post("http://localhost:3000/manufacturers.json", params).then((response) => {
      setManufacturers([...manufacturers, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndexManufacturers, []);

  return (
    <div>
      <ManufacturersNew onCreateManufacturer={handleCreateManufacturer} />
      <ManufacturersIndex manufacturers={manufacturers} />
      <Modal show={true}>
        <h1>Test</h1>
      </Modal>
    </div>
  );
}
