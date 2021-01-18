import React,{useEffect,useRef, useState} from 'react';
import {likeData} from '../../actions/dataActions';

export function LikeButton(item){
  const [data,setData] = useState(item.item.data[0]);

  const firstUpdate = useRef(true);
  useEffect(()=>{
    if(firstUpdate.current){
      firstUpdate.current = false;
      return;
    } else {
      likeData(data);
    }
  })

  function handleClick(){
    if(!data.like){
      console.log('liked')
      setData({...data,like:true});
    } else {
      console.log('unliked')
      setData({...data,like:false});
    }

  }

  return(
    <button 
      className={"likeButton " + (data.like ? 'liked' : 'unliked')} 
      onClick={handleClick}
    >
      Like
    </button>
  )
}

export default LikeButton;