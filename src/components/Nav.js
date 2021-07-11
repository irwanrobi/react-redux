import React from 'react';
import { useSelector } from 'react-redux'

const Nav = () => {

    const counter = useSelector((state) => state.counter);
    return (
        <nav>
            <h3>Nav {counter}</h3>
        </nav>
    )
}

export default Nav
