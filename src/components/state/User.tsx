import { useState } from "react"

type AuthUser = {
    email: string,
    name: string
}

const defaultUser = {
    email: "altcunningham@nightcity.com",
    name: "Alt Cunningham",
}

function User () {

    const [user, setUser] = useState<null | AuthUser>(null)

    function handleLogin () {
        setUser(defaultUser)
    }

    function handleLogout () {
        setUser(null)
    }

    if (user) {
        // User is logged in (user is not null)
        return (
            <div>
                <h3>useState can accept multiple types</h3>
                <div>
                    <button onClick={handleLogout}>Logout</button>
                </div>
                <br />
                <div>
                    <b>User email:</b> {user.email}
                </div>
                <div>
                    <b>User name:</b>  {user.name}
                </div>
            </div>
        )
    }

    return (
        // User has not logged in yet (user is null)
        <div>
            <h3>useState can accept multiple types</h3>
            <div>
                <button onClick={handleLogin}>Login</button>
            </div>
            <br />
            <div>
                No user has logged in
            </div>
        </div>
    )
}

export default User