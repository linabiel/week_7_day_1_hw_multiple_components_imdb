import React from "react";
import Film from './Film';

const FilmList = ({films}) => {

    const filmElements = films.map(film => {
        return(
            <Film name={film.name} key={film.id}>{film.url}</Film>
        );
    });

    return(
        <>
          {filmElements}
        </>
      )
}

// Returns the React element
export default FilmList