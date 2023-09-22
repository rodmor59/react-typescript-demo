import LoggedIn from "./state/LoggedIn"
import User from "./state/User"
import UserWithTypeAssertion from "./state/UserWithTypeAssertion"

function GroupTypeScriptUseState() {
    return (
        <div>
            <h2>TypeScript With React useState</h2>
            <h3>useState Hook LoggedIn Component</h3>
            <LoggedIn />
            <h3>useState Can Accept Multiple Types User Component</h3>
            <User />
            <h3>useState With Type Assertion</h3>
            <UserWithTypeAssertion />
        </div>
    )
}

export default GroupTypeScriptUseState