import { useEffect, useState} from 'react'
import { getUnsplash } from '../../helpers/getUnsplash';

export const useFecthGifs = ( searchData ) => {

  const [images, setImages] = useState([ ]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () =>{
    const newImages= await getUnsplash( searchData );
    // console.log(newImages);  
    setImages( newImages );
    setIsLoading( false );
  }         
  // Efecto activado por default , al inicio
    useEffect( ()=> {
      getImages();
    }, [] );

  return {
    images,
    setImages,
    isLoading
  }
}
