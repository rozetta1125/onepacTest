import React from 'react';
import DataDetail from './DataDetail';
import './styles/DataList.scss';
import Masonry from 'react-masonry-css'


function DataList(props){
  let FilterArray=[];

  let isEmpty=false;

  switch (props.type) {
    case 'LIKED':
      FilterArray = props.collection.items.filter(item => {
        return item.data[0].like&&!item.data[0].remove
      });
      break;
    case 'REMOVED':
      FilterArray = props.collection.items.filter(item => {
        return item.data[0].remove
      });
      break;
    default:
      FilterArray = props.collection.items;
      break;
  }

  switch (props.filter){
    case 'Newest':
      FilterArray.sort((a,b)=>{
        return new Date(b.data[0].date_created) - new Date(a.data[0].date_created);
      })
      break;
    case 'Oldest':
      FilterArray.sort((a,b)=>{
        return new Date(a.data[0].date_created) - new Date(b.data[0].date_created);
      })
      break;
    case 'A-Z':
      FilterArray.sort((a,b)=>{
        if(a.data[0].title.toLowerCase() < b.data[0].title.toLowerCase()) return -1;
        if(a.data[0].title.toLowerCase() > b.data[0].title.toLowerCase()) return 1;
        return 0;
      })
    break;
    case 'Z-A':
      FilterArray.sort((a,b)=>{
        if(a.data[0].title.toLowerCase() < b.data[0].title.toLowerCase()) return 1;
        if(a.data[0].title.toLowerCase() > b.data[0].title.toLowerCase()) return -1;
        return 0;
      })
    break;
    default:
      break;
  }
  
  if(FilterArray.length===0){
    isEmpty=true;
  }

  return (
    <>
    {isEmpty ? <p>There is no result</p> : 
    <Masonry breakpointCols={3}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column">
      {FilterArray.map((item) => 
      {
        return (
          <DataDetail
          key={item.data[0].nasa_id}
          id={item.data[0].nasa_id}
          image={item.links[0].href}
          title={item.data[0].title}
          item={item}
          />
        )
      })}
    </Masonry>}
    </>
  )
}

export default DataList;