import React,{useState} from 'react';
import { searchApi } from "../../actions/dataActions";
import { useHistory } from 'react-router-dom';

export function SearchForm(){
  const [value,setValue] = useState('');
  const history = useHistory();

  const handleChange = event => {
    setValue(event.target.value)
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    searchApi(value).then(()=>{
      history.push('/data');
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={value}
        onChange={handleChange}
      />
      <input type="submit" value="Submit"/>
    </form>
  )
}
