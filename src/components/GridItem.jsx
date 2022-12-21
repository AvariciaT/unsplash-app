import React from 'react'

export const GridItem = ({ id, description, urls, first_name, last_name }) => {
  return (
    <div className="card">
        <div className='cardImg'>
          <div className="cardImg__element">
            <div className='cardImg__details cardImg__details--name'>
              <span className='cardImg__name'>{ first_name}</span>
              <span className='cardImg__name'>{ last_name}</span>
            </div>
            <div className='cardImg__details cardImg__details--flags'>
              <img src={urls} alt={ id } />
            </div>
          </div>
          <div className="cardImg__element cardImg__element--imagen">
            <img src={ urls } alt={ id } />   
            <span className='cardImg__name imagen__name imagen__name--first'>{ first_name }</span>
            <span className='cardImg__name imagen__name imagen__name--last'>{ last_name}</span>

            <span className='cardImg__name imagen__name imagen__name--circle'></span>
            <span className='cardImg__name imagen__name imagen__name--lastRight'>{ first_name}</span>

          </div>

  
          {/* <div className="buttonsSearch">
              <p>{ description }</p>
              <div className="buttonsSearch__item bg-indigo-500 hover:bg-indigo-600" > 
                  <div className="buttonsSearch__delete bg-indigo-500 hover:bg-indigo-600 close icon"></div>
              </div>
          </div> */}
        </div>
    </div>
  )
}

