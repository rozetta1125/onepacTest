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
    dispatcher.dispatch({
      actionTypes: actionTypes.LOAD_DATA,
      collection: collection,
    })
  })
}

export function updateData(item){
  dispatcher.dispatch({
    actionTypes: actionTypes.EDIT_DATA,
    item: item,
  })
}

export function likeData(item){
  dispatcher.dispatch({
    actionTypes: actionTypes.LIKE_DATA,
    item: item,
  })
}

export function removeData(item){
  dispatcher.dispatch({
    actionTypes: actionTypes.REMOVE_DATA,
    item: item,
  })
}