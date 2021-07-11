import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

const Footer = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={ () => dispatch({ type: 'SIGN_IN'})}>SIGN IN</button>
        </div>
    )
}

export default Footer
