import React, { useEffect, useState} from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import Nav from './components/Nav';
import Footer from './components/Footer'

function App() {

  const counter = useSelector((state) => state.counter);
  const signedIn = useSelector((state) => state.isLogged)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Nav />
      <Footer />
      <header className="App-header">
        <h1>Counter: {counter}</h1>
        <button onClick={()=> dispatch({ type: 'INCREMENT' })}>Increment</button>
        <button>Decrement</button>
        {signedIn && 
          <h1>Movie List</h1>
        }
      </header>
    </div>
  );
}

export default App;
