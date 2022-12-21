
import { useState } from 'react';
import { AddUnsplash, GridUnsplash } from './components';

export const Unsplash = () => {

  const [ unsplashs, setUnsplashs ] = useState( ['agua','ventana'] );

  function onAddUnsplash(newUnsplash) {
    
    if (unsplashs.includes(newUnsplash)) return;

    const temp = [... unsplashs];
    temp.unshift(newUnsplash);
    setUnsplashs(temp);
    
  }

  return (
 <>
    <div className=" text-3xl bg-violet-500 text-slate-50 text-center">Unsplash</div>
  
    <AddUnsplash onNewUnsplash={onAddUnsplash} /> 
  
    {
      unsplashs.map( (unsplash) => ( <GridUnsplash key={unsplash} unsplash={unsplash}  /> ) )   
    }
 </>
  )

}
