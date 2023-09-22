import Counter from "./state/Counter"
import LoggedIn from "./state/LoggedIn"
import User from "./state/User"
import UserWithTypeAssertion from "./state/UserWithTypeAssertion"

function GroupTypeScriptStateHooks() {
    return (
        <div>
            <h2>TypeScript With React State Hooks</h2>
            <h3>LoggedIn Component With useState Hook</h3>
            <LoggedIn />
            <h3>useState Can Accept Multiple Types User Component (User Component)</h3>
            <User />
            <h3>User Component With Type Assertion</h3>
            <UserWithTypeAssertion />
            <h3>Counter Component with useReducer Hook</h3>
            <Counter />
        </div>
    )
}

export default GroupTypeScriptStateHooks