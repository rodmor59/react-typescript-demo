import './App.css';
import DemoTypeScriptContextHook from './components/DemoTypeScriptContextHook';
import DemoTypeScriptProps from './components/DemoTypeScriptProps';
import DemoTypeScriptStateHooks from './components/DemoTypeScriptStateHooks';

function App() {
    return <div className="App">
        <h1>React TypeScript Demo</h1>
        <DemoTypeScriptProps />
        <DemoTypeScriptStateHooks />
        <DemoTypeScriptContextHook />
    </div>
}

export default App;
