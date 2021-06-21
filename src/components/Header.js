//import React from 'react' -> don't need anymore
import PropTypes from 'prop-types';
import Button from './Button'


const Header = (props) => {
    const AddTaskButtonOnClick = (e) => {
        console.log('click');
    } 

    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Button color='green' text ='Add Task' onClick = {AddTaskButtonOnClick}/>
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
