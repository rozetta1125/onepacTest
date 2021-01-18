import React, {useState, useEffect } from "react";
import dataStore from "../stores/dataStore";
import DataList from "./DataList";
import {loadData} from '../actions/dataActions';

function DataPage(){
  const [collection, setCollection] = useState(dataStore.getCollection());
  const [isBusy, setBusy] = useState(true);

  useEffect(()=>{
    dataStore.addChangeListener(onChange);
    if (dataStore.getCollection.length === 0) loadData().then(()=>setBusy(false));
    return () => dataStore.removeChangeListener(onChange);
  },[]);

  function onChange(){
    setCollection(dataStore.getCollection());
  }

  // function getAllData(){

  // }

  // function getLikedData(){

  // }

  return (
    <>
      {!isBusy ? (
        <DataList collection={collection} />
      ) : <div>Loading</div> }
    </>
  )
}

export default DataPage;