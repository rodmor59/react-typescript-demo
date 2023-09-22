import './App.css';
import DemoTypeScriptProps from './components/DemoTypeScriptProps';
import DemoTypeScriptUseState from './components/DemoTypeScriptUseState';

function App() {
    return <div className="App">
        <h1>React TypeScript Demo</h1>
        <DemoTypeScriptProps />
        <DemoTypeScriptUseState />
    </div>
}

export default App;
