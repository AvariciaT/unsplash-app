import React from 'react'

export const GridItem = ({ id, description, urls, first_name, last_name }) => {
  return (
    <div className="card">
        <p>{ first_name } { last_name }</p>

        <img src={ urls } alt={ id } />   

        <div className="buttonsSearch">
            <p>{ description }</p>
            <div className="buttonsSearch__item bg-indigo-500 hover:bg-indigo-600" > 
                <div className="buttonsSearch__delete bg-indigo-500 hover:bg-indigo-600 close icon"></div>
            </div>
        </div>
    </div>
  )
}

