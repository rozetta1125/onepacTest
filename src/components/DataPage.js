import React, {useState, useEffect } from "react";
import dataStore from "../stores/dataStore";
import DataList from "./DataList";
import {loadData} from '../actions/dataActions';

function DataPage(){
  const [collection, setCollection] = useState(dataStore.getCollection());
  const [isBusy, setBusy] = useState(true);
  const [type,setType] = useState();
  const [filter,setFilter] = useState();

  useEffect(()=>{
    dataStore.addChangeListener(onChange);
    if (dataStore.getCollection.length === 0) loadData().then(()=>setBusy(false),console.log('asdf'));
    return () => dataStore.removeChangeListener(onChange);
  },[]);

  function onChange(){
    setCollection(dataStore.getCollection());
  }

  function handleFilter(e){
    setFilter(e.target.value);
    console.log(e.target.value)
  }

  function handleCLick(e){
    setType(e.target.value);
    console.log(e.target.value)
  }

  return (
    <>
      <h2>Data Page</h2>
      {/* <select value={filter} onChange={handleFilter}>
        <option value="Sort">Sort</option>
        <option value="Newest">Newest</option>
        <option value="Oldest">Oldest</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select> */}

      <button value='ALL' onClick={handleCLick}>All Data</button>
      <button value='LIKED' onClick={handleCLick}>All Liked Data</button>
      <button value='REMOVED' onClick={handleCLick}>All Removed Data</button>

      {!isBusy ? (
        <DataList collection={collection} type={type} filter={filter}/>
      ) : <div>Loading</div> }
    </>
  )
}

export default DataPage;