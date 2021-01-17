import React, {useState, useEffect } from "react";
import dataStore from "../stores/dataStore";
import DataList from "./DataList";
import {loadData} from '../actions/dataActions';

function DataPage(){
  const [collection, setCollection] = useState(dataStore.getCollection());
  const [isBusy, setBusy] = useState(true);
  // useEffect(()=>{
  //   loadData();
  // },[]);

  useEffect(()=>{
    dataStore.addChangeListener(onChange);
    if (dataStore.getCollection.length === 0) loadData().then(()=>setBusy(false));
    return () => dataStore.removeChangeListener(onChange);
  },[]);

  function onChange(){
    setCollection(dataStore.getCollection());
  }

  return (
    <>
      <h2>List</h2>
      {!isBusy ? (
        <DataList collection={collection} />
      ) : <div>Loading</div> }
    </>
  )
}

export default DataPage;