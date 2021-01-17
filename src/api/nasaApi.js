import fetchJson from "./apiUtils";
import { NASA_API_URL } from './constants';


export function searchNasa(query) {
  return fetchJson(`${NASA_API_URL}/search?q=${query}&media_type=image`)
}


// function asyncLocalStorage(key) {
//   return Promise.resolve().then(()=>{
//     return localStorage.getItem(key);
//   })
// }
const asyncLocalStorage = {
  setItem: function (key, value) {
      return Promise.resolve().then(function () {
          localStorage.setItem(key, value);
      });
  },
  getItem: function (key) {
      return Promise.resolve().then(function () {
          return JSON.parse(localStorage.getItem(key));
      });
  }
};


export function getData(){
  return asyncLocalStorage.getItem("onepacTest");
}