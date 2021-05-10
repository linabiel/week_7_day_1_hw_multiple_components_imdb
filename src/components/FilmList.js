import React from "react";
import Film from './Film';

const FilmList = ({films}) => {

    const filmElements = films.map(film => {
        return(
            <Film name={film.name} key={film.id}>{films.url}</Film>
        );
    });

    return(
        <>
          {filmElements}
        </>
      )
}

export default FilmList