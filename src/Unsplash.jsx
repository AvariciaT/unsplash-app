
import { useState } from 'react';
import { AddUnsplash, GridUnsplash } from './components';

export const Unsplash = () => {

  const [ unsplashs, setUnsplashs ] = useState( ['car'] );

  function onAddUnsplash(onNewUnsplashs) {
    
    if (unsplashs.includes(onNewUnsplashs)) return;

    const temp = [... unsplashs];
    temp.unshift(onNewUnsplashs);
    setUnsplashs(temp);
    
  }

  return (
 <>
    <div className=" text-3xl bg-violet-500 text-slate-50 text-center">Unsplash</div>
  
    <AddUnsplash onNewUnsplashs={onAddUnsplash} /> 
  
    {
      unsplashs.map( (unsplash) => ( <GridUnsplash key={unsplash} unsplash={unsplash}  /> ) )   
    }
 </>
  )

}
