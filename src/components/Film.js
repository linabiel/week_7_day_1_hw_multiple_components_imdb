import React from 'react';
import {Link} from 'react-router';

const Film = ({name, children}) => {
    return(
        <>
            <h3>{children}</h3>
            <li>{name}</li>
        </>
    )
};

class List extends React.Component {
    render() {
        return(
            <>
            <li><Link to="/react">{name}</Link></li>
        </> 
        )
    }
}

export default Film;