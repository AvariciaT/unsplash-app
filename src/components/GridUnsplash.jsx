import React from 'react'
import { GridItem } from './GridItem';
import { useFecthGifs } from './hooks/useFecthUnsplash';
import './GridUnsplash.css';

export const GridUnsplash = ({ unsplash }) => {

  const { images, isLoading, setImages } = useFecthGifs( unsplash );

  return (
    <>
      <div className='headSearch'>
        <div className="headSearch__nameSearch">{ unsplash }</div>  
        <div className="buttonsSearch">

          <div className="buttonsSearch__item" > 
            <div className="buttonsSearch__delete close icon"></div>  
          </div>
        </div>
      </div> 
      {
        isLoading && (<h2>Cargando...</h2>)
      }

      <div className="card-grid">
        {  
          images.map(( image )  => (
            <GridItem
              // Esparcir todos los elementos dentro de la 'image'. 
              key={image.id}
              { ...image }
            />
          ))
        }
        {/* {console.log(images)} */}
      </div>
    </>
  )
}
