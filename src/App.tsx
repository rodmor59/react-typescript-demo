import Greet from './components/Greet';
/*import Person from './components/Person';
import PersonList from './components/PersonList';*/
import FictionAward from './components/FictionAward';
import Heading from './components/Heading';
import Status from './components/Status';
import './App.css';

function App() {

    /*const personName = {
        first: 'Thomas',
        last: 'Anderson',
    }

    const nameList = [
        {
            first: 'Thomas',
            last: 'Anderson'
        },
        {
            first: 'John',
            last: 'Wick'
        },
        {
            first: 'Johnny',
            last: 'Silverhand'
        },
        {
            first: 'Robert',
            last: 'McCall'
        },
    ]*/

    return (
        <div className="App">
            <Greet
                name='Ricardo'
                isLoggedIn={true}
            />
            <Status 
                status='error'
            />
            <FictionAward>
                <Heading>The best fictional character award goes to... Johnny Silverhand</Heading>
            </FictionAward>
            {/*<Person 
                name={personName}
            />
            <PersonList 
                names={nameList}
            />*/}
        </div>
    );
}

export default App;

/*
import React from 'react';
import logo from './logo.svg';

<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
*/