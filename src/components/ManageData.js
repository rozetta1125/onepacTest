import React, { useState, useEffect } from "react";
import dataStore from "../stores/dataStore";
import {loadData,updateData} from '../actions/dataActions';
import EditForm from './common/EditForm';
import { useHistory } from 'react-router-dom';
import './styles/ManageData.scss';

const ManageData = props => {
  const [errors, setErrors] = useState({});
  const [collection, setCollection] = useState(dataStore.getCollection());
  const [data, setData] = useState({});
  const [image, setImage] = useState({});
  const [isBusy, setBusy] = useState(true);
  const history = useHistory();

  useEffect(()=>{
    dataStore.addChangeListener(onChange);
    const id = props.match.params.id;
    if (collection.length === 0){
      loadData().catch(()=>{
        setBusy(false);
        setData(dataStore.getDataById(id));
        setImage(dataStore.getImageById(id));
      })
    } else if (id) {
      setData(dataStore.getDataById(id));
      setImage(dataStore.getImageById(id));
      setBusy(false);
    }
    return () => dataStore.removeChangeListener(onChange);
  },[collection.length, props.match.params.id]);

  function onChange(){
    setCollection(dataStore.getCollection());
  }

  function handleChange({ target }) {
    setData({
      ...data,
      [target.name]: target.value
    });
  }

  function formIsValid() {
    const _errors = {};

    if (!data.title) _errors.title = "Title is required";
    if (!data.description) _errors.description = "Description is required";

    setErrors(_errors);
    // Form is valid if the errors object has no properties
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if(!formIsValid()) return;
    updateData(data);
    handleBack();
  }

  function handleBack(){
    history.push('/data');
  }

  return (
    <>
      {!isBusy ? (
        <div className="flex-row">
          <div className="flex-img">
            <div className="ManageItem">
              <div className="ManageItem-imageWrapper">
              <img 
                src={image}
                alt={data.title}
                className="ManageItem-image"
              />
              </div>
            </div>
          </div>
          <div className="flex-form">
          <br />
          <button onClick={handleBack}>Back</button>
          <br /><br />
          <h2>Edit Data</h2>
          <EditForm
            errors={errors}
            data={data}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
          </div>
        </div>
        ) : <div>Loading</div> }
    </>
  );
}

export default ManageData;