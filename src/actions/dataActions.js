import dispatcher from '../appDispatcher';
import * as nasaApi from '../api/nasaApi';
import actionTypes from './actionTypes';

export function searchApi(query) {
  return nasaApi.searchNasa(query).then(collection => {
    dispatcher.dispatch({
      actionTypes: actionTypes.SEARCH_DATA,
      collection:collection.collection
    })
  })
}

export function loadData(){
  return nasaApi.getData().then(collection=>{
    console.log(collection);
    dispatcher.dispatch({
      actionTypes: actionTypes.LOAD_DATA,
      collection: collection,
    })
  })
}