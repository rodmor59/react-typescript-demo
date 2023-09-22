import Button from './components/Button';
import Greet from './components/Greet';
import Input from './components/Input';
import Person from './components/Person';
import PersonList from './components/PersonList';
import FictionAward from './components/FictionAward';
import Heading from './components/Heading';
import Status from './components/Status';
import './App.css';

// Types
type ButtonMouseEvent = React.MouseEvent<HTMLButtonElement>
type InputChangeEvent = React.ChangeEvent<HTMLInputElement>

// Message Consts
const logMsgClickHandled = 'Click handled';
const logMsgInputChangeHandled = 'Input change handled by its parent component';

function App() {

    const personName = {
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
    ]

    const handleClick = (event: ButtonMouseEvent, id: number) => {
        console.log(logMsgClickHandled, event, id)
    }

    const handleChange = (event: InputChangeEvent) => {
        console.log(logMsgInputChangeHandled, event)
    }

    return (
        <div className="App">
            <h2>Basic Props</h2>
            <h3>Greet Component</h3>
            <Greet
                name='Ricardo'
                isLoggedIn={true}
            />
            <h3>Person Component</h3>
            <Person 
                name={personName}
            />
            <h3>Person List Component</h3>
            <PersonList 
                names={nameList}
            />
            <h2>Advanced Props</h2>
            <h3>Status Component</h3>
            <Status 
                status='error'
            />
            <h3>Fiction Award and Heading Components</h3>
            <FictionAward>
                <Heading>The best fictional character award goes to... Johnny Silverhand</Heading>
            </FictionAward>
            <h3>Event Props</h3>
            <div>
                Button: <Button onClick={handleClick}>Accept</Button>
            </div>
            <div>
                Input: <Input value='' onChange={(handleChange)} handleChangeInternally={true} />
            </div>
        </div>
    );
}

export default App;
