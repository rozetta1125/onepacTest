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

  updateLocalStorage(){
    let stringify = JSON.stringify(_collection);
    localStorage.setItem("onepacTest",stringify);
  }

  getCollection() {
    return _collection;
  }

  getDataById(id) {
    let test = _collection.items.find(item => item.data[0].nasa_id === id);
    return test.data[0];
  }
  getImageById(id){
    let test = _collection.items.find(item => item.data[0].nasa_id === id);
    return test.links[0].href;
  }
}

const store = new DataStore();

Dispatcher.register(action => {
  switch(action.actionTypes){
    case actionTypes.SEARCH_DATA:
      _collection = action.collection;
      store.updateLocalStorage();
      store.emitChange();
      break;
    case actionTypes.LOAD_DATA:
      _collection = action.collection;
      store.emitChange();
      break;
    case actionTypes.EDIT_DATA:
      _collection.items.forEach((item,index)=>{
        if(item.data[0].nasa_id === action.item.nasa_id){
          _collection.items[index].data[0] = action.item;
        }
      });
      store.updateLocalStorage();
      store.emitChange();
      break;
    case actionTypes.LIKE_DATA:
      _collection.items.forEach((item,index)=>{
        if(item.data[0].nasa_id === action.item.nasa_id){
          _collection.items[index].data[0] = action.item;
        }
      });
      store.updateLocalStorage();
      store.emitChange();
      break;
    case actionTypes.REMOVE_DATA:
      console.log(action.item.nasa_id);
      _collection.items.forEach((item,index)=>{
        if(item.data[0].nasa_id === action.item.nasa_id){
          console.log(_collection.items[index].data[0])
          _collection.items[index].data[0] = action.item;
          console.log(_collection.items[index].data[0])
        }
      });
      store.updateLocalStorage();
      store.emitChange();
      break;
    default:
  }
})

export default store;