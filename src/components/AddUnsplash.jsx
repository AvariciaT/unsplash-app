import React, { useState } from 'react'

export const AddUnsplash = ({ onNewUnsplash }) => {

    const  [inputValue, setInputValue]  = useState("");

    function onChangeSearch({target}) {
      setInputValue(target.value);
    }
    
    function onSubmit(event) {
        event.preventDefault();
        if(inputValue.trim().toLowerCase().length < 1) return;
        onNewUnsplash(inputValue.trim().toLowerCase());
        setInputValue('');  
    }

  return (
    <form onSubmit={onSubmit}>
        <input type="text" placeholder="Buscador" onChange={event => { return onChangeSearch(event)}} />
    </form>
  )
}
