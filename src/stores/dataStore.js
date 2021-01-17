import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";

let _collection = [];

class DataStore extends EventEmitter{
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  emitLoad(){
    this.emit(CHANGE_EVENT);
  }

  getCollection() {
    return _collection;
  }

  getDataById(id) {
    return _collection.find(data => data.id === id);
  }
}

const store = new DataStore();

Dispatcher.register(action => {
  switch(action.actionTypes){
    case actionTypes.SEARCH_DATA:
      _collection = action.collection;
      let stringify = JSON.stringify(_collection);
      localStorage.setItem("onepacTest",stringify);
      store.emitChange();
      break;
    case actionTypes.LOAD_DATA:
      _collection = action.collection;
      store.emitLoad();
      break;
    default:
  }
})

export default store;