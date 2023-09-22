import './App.css';
import GroupTypeScriptProps from './components/GroupTypeScriptProps';
import LoggedIn from './components/state/LoggedIn';

function App() {
    return <div className="App">
        <h1>React TypeScript Demo</h1>
        <GroupTypeScriptProps />
        <h2>TypeScript with React useState</h2>
        <LoggedIn />
    </div>
}

export default App;
