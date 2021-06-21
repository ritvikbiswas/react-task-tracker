//import React from 'react' -> don't need anymore
import PropTypes from 'prop-types';
import Button from './Button'

import { useLocation } from 'react-router-dom'


const Header = ({title, onAdd, showAdd}) => {
    const loc = useLocation()

    return (
        <header className='header'>
            <h1>{title}</h1>
            {loc.pathname === '/' && <Button color={showAdd ? 'red' : 'green'} text = {showAdd ? 'CLOSE FORM' : 'OPEN FORM'} onClick = {onAdd}/>}
        </header>
        
    )
}

Header.defaultProps ={
    title: 'Add to Title to Your Header!'
}

Header.propTypes ={
    title: PropTypes.string
}

/**
const headingStyle = {
    color: 'red', 
    backgroundColor:'black'
}
*/

export default Header
