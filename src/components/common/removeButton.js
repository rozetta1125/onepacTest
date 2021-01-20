import React,{useEffect,useRef, useState} from 'react';
import {removeData} from '../../actions/dataActions';

export function RemoveButton(item){
  const [data,setData] = useState(item.item.data[0]);

  const firstUpdate = useRef(true);

  useEffect(()=>{
    if(firstUpdate.current){
      firstUpdate.current = false;
      return;
    } else {
      removeData(data);
    }
  },[data]);

  function handleClick(){
    if(!data.remove){
      console.log('remove')
      setData({...data,remove:true});
    } else {
      console.log('undo')
      setData({...data,remove:false});
    }
  }

  return(
    <button 
      className={"removeButton " + (data.remove ? 'removed' : '')} 
      onClick={handleClick}
    >
      {(!data.remove ? 'X' : 'Undo')}
    </button>
  )
}

export default RemoveButton;