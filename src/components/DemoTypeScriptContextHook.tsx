import Box from "./context/Box";
import { ThemeContextProvider } from "./context/ThemeContext";
import User from "./context/User";
import { UserContextProvider } from "./context/UserContext";

export default function DemoTypeScriptContextHook () {
    return <div>
        <h3>useContext: ThemeContext and Box Components</h3>
        <ThemeContextProvider>
            <Box />
        </ThemeContextProvider>
        <h3>useContext: User Component With Union Types</h3>
        <UserContextProvider>
            <User />
        </UserContextProvider>
    </div>
}