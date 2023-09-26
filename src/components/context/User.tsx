import { useContext } from "react"
import { UserContext } from "./UserContext"

const defaultUser = {
    name: 'Ricardo',
    email: 'ricardo@default.com'
}

function User () {
    const userContext = useContext(UserContext)

    function handleLogin() {
        userContext.setUser(defaultUser)
    }
    function handleLogout() {
        userContext?.setUser(null)
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={handleLogout}>Logout</button>
            {userContext.user ? <>
                <div>User name is {userContext.user.name}</div>
                <div>User email is {userContext.user.email}</div>
            </>
                :
                <div>No user has logged in.</div>
            }
        </div>
    )
}

export default User