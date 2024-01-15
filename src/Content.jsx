import axios from "axios";
import { useState, useEffect } from "react";
import { ManufacturersIndex } from "./ManufacturersIndex";
import { ManufacturersNew } from "./ManufacturersNew";
import { ManufacturersShow } from "./ManufacturersShow";
import { ModelsIndex } from "./ModelsIndex";
import { ModelsNew } from "./ModelsNew";
import { ModelsShow } from "./ModelsShow";
import { Modal } from "./Modal";

export function Content() {
  const [manufacturers, setManufacturers] = useState([]);
  const [isManufacturersShowVisible, setIsManufacturersShowVisible] = useState(false);
  const [currentManufacturer, setCurrentManufacturer] = useState({});
  const [models, setModels] = useState([]);
  const [isModelsShowVisible, setIsModelsShowVisible] = useState(false);
  const [currentModel, setCurrentModel] = useState({});

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

  const handleUpdateManufacturer = (id, params, successCallback) => {
    console.log("handleUpdateManufacturer", params);
    axios.patch(`http://localhost:3000/manufacturers/${id}.json`, params).then((response) => {
      setManufacturers(
        manufacturers.map((manufacturer) => {
          if (manufacturer.id === response.data.id) {
            return response.data;
          } else {
            return manufacturer;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsManufacturersShowVisible(false);
    setIsModelsShowVisible(false);
  };

  const handleDestroyManufacturer = (manufacturer) => {
    console.log("handleDestroyManufacturer", manufacturer);
    // eslint-disable-next-line no-unused-vars
    axios.delete(`http://localhost:3000/manufacturers/${manufacturer.id}.json`).then((response) => {
      setManufacturers(manufacturers.filter((m) => m.id !== manufacturer.id));
      handleClose();
    });
  };

  const handleIndexModels = () => {
    console.log("handleIndexModels");
    axios.get("http://localhost:3000/models.json").then((response) => {
      console.log(response.data);
      setModels(response.data);
    });
  };

  const handleCreateModel = (params, successCallback) => {
    console.log("handleCreateModel", params);
    axios.post("http://localhost:3000/models.json", params).then((response) => {
      setModels([...models, response.data]);
      successCallback();
    });
  };

  const handleShowModel = (model) => {
    console.log("handleShowModel", model);
    setIsModelsShowVisible(true);
    setCurrentModel(model);
  };

  const handleUpdateModel = (id, params, successCallback) => {
    console.log("handleUpdateModel", params);
    axios.patch(`http://localhost:3000/models/${id}.json`, params).then((response) => {
      setModels(
        models.map((model) => {
          if (model.id === response.data.id) {
            return response.data;
          } else {
            return model;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  useEffect(handleIndexManufacturers, []);
  useEffect(handleIndexModels, []);

  return (
    <div>
      <ManufacturersNew onCreateManufacturer={handleCreateManufacturer} />
      <ManufacturersIndex manufacturers={manufacturers} onShowManufacturer={handleShowManufacturer} />
      <Modal show={isManufacturersShowVisible} onClose={handleClose}>
        <ManufacturersShow
          manufacturer={currentManufacturer}
          onUpdateManufacturer={handleUpdateManufacturer}
          onDestroyManufacturer={handleDestroyManufacturer}
        />
      </Modal>
      <ModelsNew onCreateModel={handleCreateModel} />
      <ModelsIndex models={models} onShowModel={handleShowModel} />
      <Modal show={isModelsShowVisible} onClose={handleClose}>
        <ModelsShow model={currentModel} onUpdateModel={handleUpdateModel} />
      </Modal>
    </div>
  );
}
