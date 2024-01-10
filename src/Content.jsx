import axios from "axios";
import { useState, useEffect } from "react";
import { ManufacturersIndex } from "./ManufacturersIndex";
import { ManufacturersNew } from "./ManufacturersNew";
import { ManufacturersShow } from "./ManufacturersShow";
import { Modal } from "./Modal";

export function Content() {
  const [manufacturers, setManufacturers] = useState([]);
  const [isManufacturersShowVisible, setIsManufacturersShowVisible] = useState(false);
  const [currentManufacturer, setCurrentManufacturer] = useState({});

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

  const handleShowManufacturer = (manufacturer) => {
    console.log("handleShowManufacturer", manufacturer);
    4;
    setIsManufacturersShowVisible(true);
    setCurrentManufacturer(manufacturer);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsManufacturersShowVisible(false);
  };

  useEffect(handleIndexManufacturers, []);

  return (
    <div>
      <ManufacturersNew onCreateManufacturer={handleCreateManufacturer} />
      <ManufacturersIndex manufacturers={manufacturers} onShowManufacturer={handleShowManufacturer} />
      <Modal show={isManufacturersShowVisible} onClose={handleClose}>
        <ManufacturersShow manufacturer={currentManufacturer} />
      </Modal>
    </div>
  );
}
